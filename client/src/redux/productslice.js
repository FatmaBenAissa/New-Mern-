import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

export const getproducts=createAsyncThunk("product/get", async()=>{
    try {
        let result=axios.get("https://new-mern-alpha.vercel.app/product");
        return result
    } catch (error) {
        console.log(error)
    }
});
export const deleteproduct=createAsyncThunk("product/delete", async(id)=>{
    try {
        let result=axios.delete(`https://new-mern-alpha.vercel.app/product/${id}`);
        return result
    } catch (error) {
        console.log(error)
    }
});
export const addproduct=createAsyncThunk("product/add", async(newproduct)=>{
    try {
        let result=axios.post("https://new-mern-alpha.vercel.app/product/add", newproduct);
        return result
    } catch (error) {
        console.log(error)
    }
});
export const editproduct=createAsyncThunk("product/edit", async({id, edited})=>{
    try {
        let result=axios.put(`https://new-mern-alpha.vercel.app/product/${id}`,edited);
        return result
    } catch (error) {
        console.log(error)
    }
});

const initialState = {
  productlist:null,
  status:null
}

export const productSlice = createSlice({

  name: 'product',
  initialState,
  reducers: {
  
  },
   extraReducers: (builder) => {
    builder
      .addCase(getproducts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getproducts.fulfilled, (state, action) => {
        state.status = "success";
        state.productlist = action.payload.data.products;
      })
      .addCase(getproducts.rejected, (state) => {
        state.status = "fail";
      })
     .addCase(deleteproduct.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteproduct.fulfilled, (state, action) => {
        state.status = "success";
 
      })
      .addCase(deleteproduct.rejected, (state) => {
        state.status = "fail";
      })
     .addCase(addproduct.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addproduct.fulfilled, (state, action) => {
        state.status = "success";
 
      })
      .addCase(addproduct.rejected, (state) => {
        state.status = "fail";
      })
     .addCase(editproduct.pending, (state) => {
        state.status = "pending";
      })
      .addCase(editproduct.fulfilled, (state, action) => {
        state.status = "success";
 
      })
      .addCase(editproduct.rejected, (state) => {
        state.status = "fail";
      });
  },

})

// Action creators are generated for each case reducer function
export const { } = productSlice.actions

export default productSlice.reducer