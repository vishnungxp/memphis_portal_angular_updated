import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ServiceTypeItem {
  id: number;
  serviceType: string;
  equipmentCategory: string;
  status: 'Active' | 'Inactive';
}

@Component({
  selector: 'app-service-type',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './service-type.component.html',
  styleUrls: ['./service-type.component.scss']
})
export class ServiceTypeComponent implements OnInit {
  // Expose Math to template
  Math = Math;
  
  searchTerm = '';
  selectedCategory = 'Select';
  
  categories = [
    'Select',
    'Safety',
    'Navigation',
    'Fire Fighting',
    'Life Saving',
    'Communication'
  ];

  serviceTypes: ServiceTypeItem[] = [
    { id: 1, serviceType: 'Replacement', equipmentCategory: 'Safety', status: 'Active' },
    { id: 2, serviceType: 'Inspection', equipmentCategory: 'Navigation', status: 'Active' },
    { id: 3, serviceType: 'Inspection', equipmentCategory: 'Navigation', status: 'Active' },
    { id: 4, serviceType: 'Replacement', equipmentCategory: 'Safety', status: 'Active' },
    { id: 5, serviceType: 'Inspection', equipmentCategory: 'Navigation', status: 'Active' },
    { id: 6, serviceType: 'Replacement', equipmentCategory: 'Safety', status: 'Active' },
    { id: 7, serviceType: 'Thorough examination', equipmentCategory: 'Safety', status: 'Active' },
    { id: 8, serviceType: 'Dynamic Load Test', equipmentCategory: 'Navigation', status: 'Active' },
    { id: 9, serviceType: 'Annual Calibration', equipmentCategory: 'Safety', status: 'Active' },
    { id: 10, serviceType: 'Maintenance', equipmentCategory: 'Fire Fighting', status: 'Active' }
  ];

  filteredServiceTypes: ServiceTypeItem[] = [];
  
  // Pagination
  currentPage = 1;
  itemsPerPage = 6;
  totalPages = 1;
  paginatedItems: ServiceTypeItem[] = [];

  ngOnInit() {
    this.filterServiceTypes();
  }

  filterServiceTypes() {
    this.filteredServiceTypes = this.serviceTypes.filter(item => {
      const matchesSearch = !this.searchTerm || 
        item.serviceType.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.equipmentCategory.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesCategory = this.selectedCategory === 'Select' ||
        item.equipmentCategory === this.selectedCategory;
      
      return matchesSearch && matchesCategory;
    });

    this.totalPages = Math.ceil(this.filteredServiceTypes.length / this.itemsPerPage);
    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedItems = this.filteredServiceTypes.slice(startIndex, endIndex);
  }

  getStartIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  getEndIndex(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.filteredServiceTypes.length);
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

  addServiceType() {
    alert('Add Service Type functionality will be implemented');
  }

  searchData() {
    this.filterServiceTypes();
  }

  resetFilters() {
    this.searchTerm = '';
    this.selectedCategory = 'Select';
    this.filterServiceTypes();
  }

  editServiceType(item: ServiceTypeItem) {
    alert(`Edit: ${item.serviceType}`);
  }

  deleteServiceType(item: ServiceTypeItem) {
    if (confirm(`Are you sure you want to delete "${item.serviceType}"?`)) {
      this.serviceTypes = this.serviceTypes.filter(st => st.id !== item.id);
      this.filterServiceTypes();
    }
  }

  exportData() {
    alert('Export functionality will be implemented');
  }

  showMoreOptions(item: ServiceTypeItem) {
    alert(`More options for: ${item.serviceType}`);
  }
}