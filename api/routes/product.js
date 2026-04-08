const express=require("express");

const Product = require("../models/product");


const productRouter=express.Router();

//add user


productRouter.post("/add",async(req,res)=> {
        try{
            let newproduct=new Product(req.body);
            let result=await newproduct.save();
            res.send({product:result, msg:"product is added"})

        } catch(error){
            console.log(error)  }
       
    })


//get all users

productRouter.get("/", async(req,res)=>{
        try{
        
            let result=await Product.find() ;
            res.send({products:result, msg:"all products"})

        } catch(error){
            console.log(error)  }
       
    })



    //find user By Id


    productRouter.get("/:id", async(req,res)=>{
        try{
        
            let result=await Product.findById(req.params.id) ;
            res.send({product:result, msg:"one product"})

        } catch(error){
            console.log(error)  }
       
    })




//delete user

     productRouter.delete("/:id", async(req,res)=>{
        try{
        
            let result=await Product.findByIdAndDelete(req.params.id) ;
            res.send({ msg:"product is deleted"})

        } catch(error){
            console.log(error)  }
       
    })


    //edit user

      productRouter.put("/:id", async(req,res)=>{
        try{
        
            let result=await Product.findByIdAndUpdate(
                {_id:req.params.id},{$set:{...req.body}} 
                  );
            res.send({ msg:"product is edited"})
          

        } catch(error) {
            console.log(error) 
         }
       
    })







module.exports=productRouter