import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface EquipmentCategoryItem {
  id: number;
  equipmentCategory: string;
}

@Component({
  selector: 'app-equipment-category',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './equipment-category.component.html',
  styleUrls: ['./equipment-category.component.scss']
})
export class EquipmentCategoryComponent implements OnInit {
  Math = Math;
  
  searchTerm = '';
  selectedCategory = 'Select';
  
  categories = [
    'Select',
    'Safety Equipment',
    'Navigation Equipment',
    'Fire Fighting Equipment',
    'Life Saving Equipment',
    'Communication Equipment',
    'Water Systems'
  ];

  equipmentCategories: EquipmentCategoryItem[] = [
    { id: 1, equipmentCategory: 'Foam Fixed System' },
    { id: 2, equipmentCategory: 'Oily Water Separator 15ppm' },
    { id: 3, equipmentCategory: 'Water Mist System' },
    { id: 4, equipmentCategory: 'Water Mist System' },
    { id: 5, equipmentCategory: 'Oily Water Separator 15ppm' },
    { id: 6, equipmentCategory: 'Water Mist System' },
    { id: 7, equipmentCategory: 'Fire Detection System' },
    { id: 8, equipmentCategory: 'Gas Detection System' },
    { id: 9, equipmentCategory: 'Emergency Generator' },
    { id: 10, equipmentCategory: 'Life Boat System' }
  ];

  filteredCategories: EquipmentCategoryItem[] = [];
  
  // Pagination
  currentPage = 1;
  itemsPerPage = 6;
  totalPages = 1;
  paginatedItems: EquipmentCategoryItem[] = [];

  ngOnInit() {
    this.filterCategories();
  }

  filterCategories() {
    this.filteredCategories = this.equipmentCategories.filter(item => {
      const matchesSearch = !this.searchTerm || 
        item.equipmentCategory.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesCategory = this.selectedCategory === 'Select' ||
        item.equipmentCategory.toLowerCase().includes(this.selectedCategory.toLowerCase());
      
      return matchesSearch && matchesCategory;
    });

    this.totalPages = Math.ceil(this.filteredCategories.length / this.itemsPerPage);
    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedItems = this.filteredCategories.slice(startIndex, endIndex);
  }

  getStartIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  getEndIndex(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.filteredCategories.length);
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

  addEquipmentCategory() {
    alert('Add Equipment Category functionality will be implemented');
  }

  searchData() {
    this.filterCategories();
  }

  resetFilters() {
    this.searchTerm = '';
    this.selectedCategory = 'Select';
    this.filterCategories();
  }

  editCategory(item: EquipmentCategoryItem) {
    alert(`Edit: ${item.equipmentCategory}`);
  }

  deleteCategory(item: EquipmentCategoryItem) {
    if (confirm(`Are you sure you want to delete "${item.equipmentCategory}"?`)) {
      this.equipmentCategories = this.equipmentCategories.filter(cat => cat.id !== item.id);
      this.filterCategories();
    }
  }

  exportData() {
    alert('Export functionality will be implemented');
  }

  showMoreOptions(item: EquipmentCategoryItem) {
    alert(`More options for: ${item.equipmentCategory}`);
  }
}