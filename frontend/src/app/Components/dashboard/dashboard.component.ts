import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { DataService } from 'src/app/shared/data.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  post: Post = {
    _id: '',
    pais: '',
    numerofigu: '',
    cantidad: '',
    descripcion: '',
    contacto: '',

  };
  _id : string = '';
  pais: string = '';
  numerofigu: string = '';
  cantidad: string ='' ;
  descripcion: string = '';
  contacto: string = '';
  allPosts: Post[] = [];

  constructor(private   dataService: DataService, private toastr: ToastrService) {}
    
    

  ngOnInit(): void {

  







     

    this._id = '';
    this.pais = '';
    this.numerofigu = '';
    this.cantidad = '';
    this.descripcion = '';
    this.contacto = '';
    this.allPosts = [];
    this.getAllPost();
  }

  getAllPost() {
    this.dataService.getAllPost().subscribe(
      (res) => {
        this.allPosts = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getPostById(post: Post) {
    this.dataService.getPostById(post._id).subscribe(
      (res) => {
        post = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deletePostById(post: Post) {

  
    if (
      confirm(
        `Desea eliminar la figurita de ${post.pais} número ${post.numerofigu} `
      )
    ) {
     
      this.toastr.success('Figurita Borrada', 'Eliminada', {
        timeOut: 3000,
        progressBar: true,
        progressAnimation: 'increasing',
        positionClass: 'toast-top-right',
      });
      this.getAllPost();
    


      this.dataService.deletePostById(post._id).subscribe(
        (res) => {
          this.allPosts = [];
          this.getAllPost();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  createPost() {
    this.post.pais = this.pais;
    this.post.numerofigu = this.numerofigu;
    this.post.cantidad = this.cantidad;
    this.post.descripcion = this.descripcion;
    this.post.contacto = this.contacto;
    this.dataService.createPost(this.post).subscribe(
      (res) => {
        this.ngOnInit();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  editPost(post: Post) {
    this.getPostById(post);
    this._id = post._id;
    this.pais = post.pais;
    this.numerofigu = post.numerofigu;
    this.cantidad = post.cantidad;
    this.descripcion = post.descripcion;
    this.contacto = post.contacto;

  }

  updatePost() {
    if (this.pais == '' || this.numerofigu == '' || this.cantidad == ''
    || this.descripcion == '' || this.contacto == '') {
      alert('Please fill all the values');
      return;
    }
    this.post._id = this._id;
    this.post.pais = this.pais;
    this.post.numerofigu = this.numerofigu;
    this.post.cantidad = this.cantidad;
    this.post.descripcion = this.descripcion;
    this.post.contacto = this.contacto;


    this.dataService.updatePost(this.post).subscribe(
      (res) => {
        this.toastr.success('Figurita Actualizada', '', {
          timeOut: 3000,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right',
        });
        this.ngOnInit();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
