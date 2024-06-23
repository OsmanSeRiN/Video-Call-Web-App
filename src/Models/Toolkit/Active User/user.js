import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import { auth, db, storage } from "../../FireBase/firebase";
import { addDoc, collection } from "firebase/firestore";

export const createUser = createAsyncThunk("user/createUser", async (userData) => {
    const { email, password, name, isApproval } = userData;
    try {
        await auth.createUserWithEmailAndPassword(email, password, name);
        const refData = addDoc(collection(db,"Users"),{
            name: name,
            email: email,
            password: password, // Not: Güvenlik nedenleriyle şifreyi düz metin olarak saklamak önerilmez
            isApproval: isApproval,
            id: nanoid(5)
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
            successful: false, // succesfull -> successful düzeltildi
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
