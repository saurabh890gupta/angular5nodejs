import { Component, OnInit } from '@angular/core';

import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-property',
  templateUrl: './show-property.component.html',
  styleUrls: ['./show-property.component.css']
})
export class ShowPropertyComponent implements OnInit {
result:any;
imgData= [];
somthing=[];
tempdata=[];
localCartData1:any;
localCartData2:any;
IsVisible=false;
array=[]
kal:any;
count=0;
  constructor(
    private authService:AuthServiceService,
    private router: Router,
    // private toastr: ToastrService
  ) {

 
   }

  ngOnInit() {
    this.localCartData1=sessionStorage.getItem("cart");
    this.localCartData2=JSON.parse(this.localCartData1)
    this.array=this.localCartData2
    // console.log("this.cal data paper", this.localCartData2 , this.array)
    if(this.localCartData2==null)
    {
      this.array=[];
      this.count=0;
    }else{
      this.count=this.localCartData2.length
    }

    // this.authService.propertyShow()
    // .subscribe((response:any) => {
    //   this.result=response
    //   console.log("propertyscrollj",this.result);
    //     });
        this.image();
  }
  image()
    {
      this.authService.ImageShow()
      .subscribe((response:any) => {
        this.somthing=response.res
        this.tempdata=this.somthing;
        console.log("response response", this.somthing)
        
        response.res.forEach((data)=>{
          console.log("response response",data)
          this.imgData.push('http://localhost:5050/' + data.propertyimage)
          
        })

        // this.imgData.forEach((element) => {
        //   console.log("aaaa", element);
        //   //element   += 'http://localhost:4000' 
        // });
        console.log("data", this.imgData);
      });
    }
    detailsShow(ind){
      if(sessionStorage.getItem('token')){

     
        console.log("hello data",ind )
      // this.router.navigate(['propertydetail'],{ queryParams: { ind: ind,data:data} }) ;
      this.router.navigate(['/propertydetail'], { queryParams: { ind: ind, } });

      }else{
        alert("you are not login firstly login")
      // this.showSuccess()
      }
    }
    // showSuccess() {
    //   this.toastr.success('Hello world!', 'Toastr fun!');
    // }
    searchEnter(event){
      const value=event.target.value;
      console.log("valueeee",value);
      this.IsVisible=false;
      if(value==undefined){
        this.image();
        return
      }
      if(value==''){
        this.image();
      }
      if (value.length>=1) { 
        this.somthing= this.tempdata.filter(f=>{
          if(f && f.propertyname.toLowerCase().indexOf(value.toLowerCase())>-1 || f.propertycity.toLowerCase().indexOf(value.toLowerCase())>-1){
          // if(f && f.propertyname.indexOf(value)>-1 || f.propertycity.indexOf(value)>-1){  //WITH OUT UPPER CASE
            return f;
          }
        })
        if(this.somthing.length==0){
          this.IsVisible=true;
         }
      }
      else{
        this.somthing=[];
      }

    }
    cartData:any;
    addCart(ind, data){
      // this.count=this.count+1
      // console.log("counttttttt",this.count)
      // console.log("hello get data find",ind, data ,this.array)
      this.kal=this.array.push({index:ind,name:data});
      // this.array.push({index:ind,name:data});
      // console.log("this.localCartData2this.localCartData2",this.array)
      this.count= this.array.length;
      this.cartData=JSON.stringify(this.array);
      // this.del=JSON.stringify(this.localCartData2);
      // console.log("hello",this.array,this.count,  this.jal);
      sessionStorage.setItem("cart", this.cartData);

    }
    openCart(){

    }

}
