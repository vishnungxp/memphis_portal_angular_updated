import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface MakerItem {
  id: number;
  maker: string;
}

@Component({
  selector: 'app-maker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './maker.component.html',
  styleUrls: ['./maker.component.scss']
})
export class MakerComponent implements OnInit {
  Math = Math;
  
  searchTerm = '';
  selectedMaker = 'Select';
  
  makerOptions = [
    'Select',
    'Yanmar',
    'Alfa Laval',
    'Caterpillar',
    'Wärtsilä',
    'MAN Energy Solutions'
  ];

  makerList: MakerItem[] = [
    { id: 1, maker: 'Yanmar' },
    { id: 2, maker: 'Alfa Laval' },
    { id: 3, maker: 'Alfa Laval' },
    { id: 4, maker: 'Yanmar' },
    { id: 5, maker: 'Alfa Laval' },
    { id: 6, maker: 'Yanmar' },
    { id: 7, maker: 'Caterpillar' },
    { id: 8, maker: 'Wärtsilä' },
    { id: 9, maker: 'MAN Energy Solutions' },
    { id: 10, maker: 'Yanmar' }
  ];

  filteredMakers: MakerItem[] = [];
  
  // Pagination
  currentPage = 1;
  itemsPerPage = 6;
  totalPages = 1;
  paginatedItems: MakerItem[] = [];

  ngOnInit() {
    this.filterMakers();
  }

  filterMakers() {
    this.filteredMakers = this.makerList.filter(item => {
      const matchesSearch = !this.searchTerm || 
        item.maker.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesMaker = this.selectedMaker === 'Select' ||
        item.maker === this.selectedMaker;
      
      return matchesSearch && matchesMaker;
    });

    this.totalPages = Math.ceil(this.filteredMakers.length / this.itemsPerPage);
    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedItems = this.filteredMakers.slice(startIndex, endIndex);
  }

  getStartIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  getEndIndex(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.filteredMakers.length);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  addMaker() {
    alert('Add Maker functionality will be implemented');
  }

  searchData() {
    this.filterMakers();
  }

  resetFilters() {
    this.searchTerm = '';
    this.selectedMaker = 'Select';
    this.filterMakers();
  }

  editMaker(item: MakerItem) {
    alert(`Edit: ${item.maker}`);
  }

  deleteMaker(item: MakerItem) {
    if (confirm(`Are you sure you want to delete "${item.maker}"?`)) {
      this.makerList = this.makerList.filter(m => m.id !== item.id);
      this.filterMakers();
    }
  }

  exportData() {
    alert('Export functionality will be implemented');
  }

  showMoreOptions(item: MakerItem) {
    alert(`More options for: ${item.maker}`);
  }
}