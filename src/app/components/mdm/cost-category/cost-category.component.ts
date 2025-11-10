import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface CostCategoryItem {
  id: number;
  costCategory: string;
}

@Component({
  selector: 'app-cost-category',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cost-category.component.html',
  styleUrls: ['./cost-category.component.scss']
})
export class CostCategoryComponent implements OnInit {
  Math = Math;
  
  searchTerm = '';
  selectedCostCategory = 'Select';
  
  costCategoryOptions = [
    'Select',
    'Direct Cost',
    'Indirect Cost Overheads',
    'Operating Expenses',
    'Capital Expenditure',
    'Maintenance Cost'
  ];

  costCategoryList: CostCategoryItem[] = [
    { id: 1, costCategory: 'Direct Cost' },
    { id: 2, costCategory: 'Indirect Cost Overheads' },
    { id: 3, costCategory: 'Direct Cost' },
    { id: 4, costCategory: 'Indirect Cost Overheads' },
    { id: 5, costCategory: 'Direct Cost' },
    { id: 6, costCategory: 'Indirect Cost Overheads' },
    { id: 7, costCategory: 'Operating Expenses' },
    { id: 8, costCategory: 'Capital Expenditure' },
    { id: 9, costCategory: 'Maintenance Cost' },
    { id: 10, costCategory: 'Direct Cost' }
  ];

  filteredCostCategories: CostCategoryItem[] = [];
  
  // Pagination
  currentPage = 1;
  itemsPerPage = 6;
  totalPages = 1;
  paginatedItems: CostCategoryItem[] = [];

  ngOnInit() {
    this.filterCostCategories();
  }

  filterCostCategories() {
    this.filteredCostCategories = this.costCategoryList.filter(item => {
      const matchesSearch = !this.searchTerm || 
        item.costCategory.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesCategory = this.selectedCostCategory === 'Select' ||
        item.costCategory === this.selectedCostCategory;
      
      return matchesSearch && matchesCategory;
    });

    this.totalPages = Math.ceil(this.filteredCostCategories.length / this.itemsPerPage);
    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedItems = this.filteredCostCategories.slice(startIndex, endIndex);
  }

  getStartIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  getEndIndex(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.filteredCostCategories.length);
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

  addCostCategory() {
    alert('Add Cost Category functionality will be implemented');
  }

  searchData() {
    this.filterCostCategories();
  }

  resetFilters() {
    this.searchTerm = '';
    this.selectedCostCategory = 'Select';
    this.filterCostCategories();
  }

  editCostCategory(item: CostCategoryItem) {
    alert(`Edit: ${item.costCategory}`);
  }

  deleteCostCategory(item: CostCategoryItem) {
    if (confirm(`Are you sure you want to delete "${item.costCategory}"?`)) {
      this.costCategoryList = this.costCategoryList.filter(c => c.id !== item.id);
      this.filterCostCategories();
    }
  }

  exportData() {
    alert('Export functionality will be implemented');
  }

  showMoreOptions(item: CostCategoryItem) {
    alert(`More options for: ${item.costCategory}`);
  }
}