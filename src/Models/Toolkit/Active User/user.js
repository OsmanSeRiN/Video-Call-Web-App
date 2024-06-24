import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import { auth, db } from "../../FireBase/firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";  // Import the function directly

export const createUser = createAsyncThunk("user/createUser", async (userData) => {
    const { email, password, name, isApproval } = userData;
    try {

        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await setDoc(doc(db, "Users",user.uid), {
            name: name,
            email: email,
            isApproval: isApproval,
            id: user.uid
        });

        alert("Başarı ile oluşturuldu");
        return userData;
    } catch (err) {
        console.log("Error: ", err.message);
        throw err; // Hata durumunda hatayı throw etmek önemlidir, böylece async thunk işlemleri yönetilebilir
    }
});

export const user = createSlice({
    name: 'User',
    initialState: {
        userInfo: {},
        appStatus: {
            error: false,
            busy: false,
            successful: false,
        },
        userVideos: {
            video: []
        }
    },
    reducers: {
        activeUser: (state, action) => {
            state.userInfo = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.appStatus.busy = true;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.appStatus.busy = false;
                state.appStatus.successful = true;
                state.userInfo = action.payload;
            })
            .addCase(createUser.rejected, (state, action) => {
                state.appStatus.busy = false;
                state.appStatus.error = true;
            });
    }
});
