import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from "../../FireBase/firebase";
import { setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";  // Import the function directly

export const createUser = createAsyncThunk("user/createUser", async (userData, { rejectWithValue }) => {
    const { email, password, name, isApproval } = userData;
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await setDoc(doc(db, "Users", user.uid), {
            name: name,
            email: email,
            isApproval: isApproval,
            id: user.uid
        });
        return userData;
    } catch (err) {
        const errorMessage = err.message;
        console.log("Error: ", errorMessage);
        return rejectWithValue(errorMessage);
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
                state.appStatus.error = false;
                state.appStatus.successful = false;
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
