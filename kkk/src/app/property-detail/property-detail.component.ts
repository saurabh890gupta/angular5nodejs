import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { parseTemplate } from '@angular/compiler';
import {AuthServiceService} from '../services/auth-service.service'

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  sub:any;
  id:any;
  data:any;
  somthing:any;
  imgData=[];
  ownerDetails={
    propertyname:'',
    phone:'',
    propertycity:'',
    propertydescreption:'',
    propertyleaseperioud:'',
    propertyprice:'',
    propertystate:'',
    propertystatus:'',
    propertyarea:'',
    propertyCeilings: '',
    propertyDualsink: '',
    propertyJogpath: '',
    propertyStories:'',
    propertySwimmingpool: '',
    propertyVideo1:'',
    propertyVideo2:'',
    propertyVideo3:'',
    propertyexit: '',
    propertyimage: '',
    propertylaundryroom:'',
    propertyminbed: '',
    propertyrireplace: '',
   

  }
  constructor(
    public route:ActivatedRoute,
    public authService:AuthServiceService,
  ) { }

  ngOnInit() {
  //   this.id= this.route.snapshot.paramMap.get('ind'); 
  //   this.data= this.route.snapshot.paramMap.get('data'); 
  //   // this.id = this.route.params['id'];
  //   // this.data =this.route.snapshot.data['data'];
  //   console.log("held dtd",this.id,this.data)
  //   // this.sub = this.route.queryParams.subscribe(params => {
  //   //   this.id = +params['ind'] || 0;
  //   //   this.data = +params['data'];
  //   // });
  //   // console.log("held dtd",this.id,this.data)
  
    this.sub = this.route.queryParams.subscribe(params => {
    // this.id = +params['ind']; // (+) converts string 'id' to a number
    console.log("held dtd",params.ind)
      

    this.propertyGetData(params.ind);

    // In a real app: dispatch action to load the details here.
    });

    
  }
   
  propertyGetData(params){
    this.authService.getPropertydata(params).subscribe((response:any)=>{
      console.log("hello data found",response)
      this.somthing=response.res
      console.log("respons555", response.res)

      response.res.forEach((data)=>{
        console.log("response response",data.propertyname)
        this.ownerDetails=data
        this.imgData.push('http://localhost:5050/' + data.propertyimage)
        
      })
     
      console.log("data", this.imgData,this.ownerDetails);
    })
  }
}
