import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
  name: "mail",
  initialState: {
    allMails: [],
    sentMails:[],
  },
  reducers: {
    addMail(state, action) {
      if(action.payload.sender===localStorage.getItem("email"))
      {
        state.sentMails.push({...action.payload});
      }
      else
      {
        state.allMails.push({...action.payload});
      }
    },
    removeMail(state, action){
      state.sentMails=state.sentMails.filter(value=>{
        return value.sentid!==action.payload.sentid;
      })
    }
  }
});

export const mailAction = mailSlice.actions;

export default mailSlice.reducer;
