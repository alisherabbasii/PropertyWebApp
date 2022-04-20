import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {BlogsService} from "../../services/blogs.service";
import {IBlogsList} from "../../services/blogs";

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit, AfterViewInit {
  menuList: MenuItem[] = [];
  blogsList: IBlogsList = {} as IBlogsList;
  isCollapsed : boolean = true;
  first: number = 0;
  showSearchBar: boolean = false

  totalRecords: number = 120;

  totalRecords2: number = 12;


  constructor(private blogsService: BlogsService) {

  }

  ngOnInit(): void {
    this.getAllBlogs();
  }

  ngAfterViewInit() {
    this.menuList = [];
    this.getAllBlogsbyClass();
  }

  getAllBlogs() {
    const req = {
      LazyLoadEvent:{
        first:1, // Starting record number
        rows:1 // Number of records
      }
    };
    this.blogsService.getAllBlogs(req).subscribe(res => {
      this.blogsList = res;
    });
  }

  getAllBlogsbyClass() {
    this.blogsService.getAllBlogsbyClass().subscribe(res => {
      if(res.result){
        this.showSearchBar = true;
        res.result.forEach((item: any) => {
          this.menuList.push({'label' : item.BlogClassName})
        })
      }
    });
  }

  paginate(event: any) {
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
  }

  onPageChange(event: any) {
    this.first = event.first;
  }

  refresh() {
    this.first = 0;
  }
}
