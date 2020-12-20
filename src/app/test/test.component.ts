import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  li:any;
  lis=[];
  edit=true;
  value:number;
  menu=false;
  @Input() text:string;
  title:string;
  myControl = new FormControl();
  projectN:any;
  projectCharter={
    projectTitle:null,
    startDate:null,
    finishDate:null,
    projectObjectives:null,
    projectManager:null,
    projectInformation:null,
    projectSpaceStatments:null
  }
  srs={
    introduction:null,
    posb:null,
    ia:null,
    ods:null,
    sfr:null
  }
  projects = [];
  sres=[];
  editedProject:any;
  editedSRS:any;
  options = [
    {
      text:'Initiation Phase',
      value:1
    },
    {
      text:'Requirements Phase (Analysis Phase)',
      value:2
    },
    {
      text:'Design Phase',
      value:3
    }
  ];
  constructor(private http : HttpClient){

  }
  editDialog(obj){
    this.projectN = {... this.projects.find((el) => el.projectTitle == obj.projectTitle)};
    console.log(this.projectN);
  }
  log()
  {console.log(this.projects);}
  addProjectCharter(){
    this.projects.push(this.projectCharter);
    this.projectCharter = {
    projectTitle:null,
    startDate:null,
    finishDate:null,
    projectObjectives:null,
    projectManager:null,
    projectInformation:null,
    projectSpaceStatments:null
    }
  }
  editProjectCharter(){
    this.editedSRS = {... this.projects.find((el) => el.projectTitle = this.projectN.projectTitle)}
    console.log(this.editedSRS)
  }
  arraySRSRemove() {
    this.projects = this.projects.filter(item => item.projectTitle !== this.projectN.projectTitle);
}
  addSRS(){
    this.projects.push(this.srs);
    this.srs={
      introduction:null,
      posb:null,
      ia:null,
      ods:null,
      sfr:null
    }
  }
  editSRS(){
    this.editedProject = {... this.projects.find((el) => el.projectTitle = this.projectN.projectTitle)}
    console.log(this.editedProject)
  }
  arrayRemove() {
    this.projects = this.projects.filter(item => item.projectTitle !== this.projectN.projectTitle);
}
  resetProject(){
    this.projectCharter = {
      projectTitle:null,
    startDate:null,
    finishDate:null,
    projectObjectives:null,
    projectManager:null,
    projectInformation:null,
    projectSpaceStatments:null
    }
  }
  resetSRS(){
    this.srs={
      introduction:null,
      posb:null,
      ia:null,
      ods:null,
      sfr:null
    }
  }
  ngOnInit(): void {
  }

}
