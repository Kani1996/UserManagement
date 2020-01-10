import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public contacts: any;
  public gridOptions: any;
  public pageRowData: any;
  public gridApi;
  displayedColumns: string[] = ['firstName', 'lastName', 'mobileNumber', 'emailId',];
  columnData = [
    { headerName: 'FIRST NAME', field: 'firstName', minWidth: 110, suppressSizeToFit: false,
     cellStyle: { color: '#0087C6', cursor: 'pointer' }, tooltipField: 'view', coldId: 'firstName', resizable: false },
    { headerName: 'LAST NAME', minWidth: 100, suppressSizeToFit: false, field: 'lastName', colId: 'lastName', resizable: false },
    { headerName: 'MOBILE NUMBER', minWidth: 180, suppressSizeToFit: false, field: 'mobileNumber',
    colId: 'mobileNumber', resizable: false },
    { headerName: 'E-MAIL', minWidth: 180, suppressSizeToFit: false, field: 'emailId', colId: 'emailId', resizable: false },
    {
      headerName: 'ACTION', suppressMenu: true,
      pinned: 'right',
      lockPinned: true,
      cellRenderer: (data) => {
        return `
        <div>
           <button  mat-stroked-button color="primary" class="btn-grid-action">
             <span data-action-type="delete"><mat-icon>delete</mat-icon></span></button>
        </div>
        `;
      }
      , width: 120, minWidth: 125, maxWidth: 130, suppressSizeToFit: false, Columnhide: false, colId: "actions",
    }
  ];
  constructor(private contactService: ContactService) {
    this.gridOptions = <GridOptions>{};
  }

  ngOnInit() {
    this.getDetails();
  }

  public getDetails() {
    this.contactService.getContacts().subscribe((data: any) => {
      try {
        if (data !== undefined) {
          console.log('getDetails:::', data);
          this.pageRowData = data;
        }
      } catch (ex) {
        console.log(ex);
      }
    }, () => { });
  }
  onGridReady(params) {
    this.gridApi = params.api;
  }
  // Grid Cell Clicked Event
  public onCellClicked(event) {
    console.log('event', event);
    const actionType = event.event.target.textContent;
    if (actionType === 'delete') {
      this.onDeleteClicked(event.data);

    }
  }
  public onDeleteClicked(data) {
    console.log('delete', data);
    this.contactService.deleteContact(data._id).subscribe(( data : any) => {
      if (data !== undefined) {
        console.log('Deleted');
        this.getDetails();
      }
    });
  }
}
