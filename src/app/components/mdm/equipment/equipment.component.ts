import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface EquipmentItem {
  id: number;
  image: string;
  equipmentName: string;
  equipmentCategory: string;
  dateOfManufacturing: string;
}

@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  Math = Math;
  
  searchTerm = '';
  selectedCategory = 'Select';
  dateOfManufacturing = ''; // ✅ FIXED: Added missing property
  
  categories = [
    'Select',
    'Safety',
    'Navigation',
    'Fire Fighting',
    'Life Saving',
    'Communication',
    'Water Systems'
  ];

  equipmentList: EquipmentItem[] = [
    {
      id: 1,
      image: 'https://via.placeholder.com/60x60?text=Equipment',
      equipmentName: 'Foam Fixed System',
      equipmentCategory: 'Safety',
      dateOfManufacturing: '12-Jun-2025'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/60x60?text=Equipment',
      equipmentName: 'Oily Water Separator 15ppm',
      equipmentCategory: 'Safety',
      dateOfManufacturing: '12-Jun-2025'
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/60x60?text=Equipment',
      equipmentName: 'Water Mist System',
      equipmentCategory: 'Safety',
      dateOfManufacturing: '12-Jun-2025'
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/60x60?text=Equipment',
      equipmentName: 'Water Mist System',
      equipmentCategory: 'Safety',
      dateOfManufacturing: '12-Jun-2025'
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/60x60?text=Equipment',
      equipmentName: 'Oily Water Separator 15ppm',
      equipmentCategory: 'Safety',
      dateOfManufacturing: '12-Jun-2025'
    },
    {
      id: 6,
      image: 'https://via.placeholder.com/60x60?text=Equipment',
      equipmentName: 'Water Mist System',
      equipmentCategory: 'Safety',
      dateOfManufacturing: '12-Jun-2025'
    },
    {
      id: 7,
      image: 'https://via.placeholder.com/60x60?text=Equipment',
      equipmentName: 'Fire Detection System',
      equipmentCategory: 'Safety',
      dateOfManufacturing: '15-Mar-2025'
    },
    {
      id: 8,
      image: 'https://via.placeholder.com/60x60?text=Equipment',
      equipmentName: 'Gas Detection System',
      equipmentCategory: 'Safety',
      dateOfManufacturing: '20-Apr-2025'
    }
  ];

  filteredEquipment: EquipmentItem[] = [];
  
  // Pagination
  currentPage = 1;
  itemsPerPage = 6;
  totalPages = 1;
  paginatedItems: EquipmentItem[] = [];

  ngOnInit() {
    this.filterEquipment();
  }

  filterEquipment() {
    this.filteredEquipment = this.equipmentList.filter(item => {
      const matchesSearch = !this.searchTerm || 
        item.equipmentName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.equipmentCategory.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesCategory = this.selectedCategory === 'Select' ||
        item.equipmentCategory === this.selectedCategory;
      
      const matchesDate = !this.dateOfManufacturing ||
        item.dateOfManufacturing.includes(this.dateOfManufacturing);
      
      return matchesSearch && matchesCategory && matchesDate;
    });

    this.totalPages = Math.ceil(this.filteredEquipment.length / this.itemsPerPage);
    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedItems = this.filteredEquipment.slice(startIndex, endIndex);
  }

  getStartIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  getEndIndex(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.filteredEquipment.length);
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

  addEquipment() {
    alert('Add Equipment functionality will be implemented');
  }

  searchData() {
    this.filterEquipment();
  }

  resetFilters() {
    this.searchTerm = '';
    this.selectedCategory = 'Select';
    this.dateOfManufacturing = '';
    this.filterEquipment();
  }

  editEquipment(item: EquipmentItem) {
    alert(`Edit: ${item.equipmentName}`);
  }

  deleteEquipment(item: EquipmentItem) {
    if (confirm(`Are you sure you want to delete "${item.equipmentName}"?`)) {
      this.equipmentList = this.equipmentList.filter(eq => eq.id !== item.id);
      this.filterEquipment();
    }
  }

  exportData() {
    alert('Export functionality will be implemented');
  }

  // ✅ FIXED: Changed to accept two parameters
  showMoreOptions(item: EquipmentItem, column: string) {
    alert(`More options for: ${item.equipmentName} - ${column}`);
  }

  // ✅ FIXED: Added missing method
  onImageError(event: any) {
    event.target.src = 'https://via.placeholder.com/60x60?text=No+Image';
  }
}