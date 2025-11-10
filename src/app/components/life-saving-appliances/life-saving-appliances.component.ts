import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Equipment {
  id: number;
  name: string;
  image: string;
  serviceType: string;
  vesselName: string;
  status: 'Active' | 'Inactive' | 'Expired';
  serviceDate: string;
  maker: string;
  type: string;
  quantity: number;
  dateOfManufacturing: string;
  dateOfExpiry: string;
  intervalType: string;
  intervalComments: string;
  equipmentCategory: string;
  serviceInterval: string;
}

interface RenewalHistory {
  id: number;
  action: string;
  equipmentType: string;
  performedBy: string;
  date: string;
  description: string;
}

@Component({
  selector: 'app-life-saving-appliances',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './life-saving-appliances.component.html',
  styleUrls: ['./life-saving-appliances.component.scss']
})
export class LifeSavingAppliancesComponent implements OnInit {
  selectedVessel = 'Select';
  selectedSMC = 'SMC-IN';
  searchTerm = '';
  searchEquipment = '';

  // Service Type Filters
  serviceTypes = [
    { label: 'Replacement', checked: false },
    { label: 'Thorough examination', checked: false },
    { label: 'Dynamic Load Test', checked: false },
    { label: 'Inspection', checked: false }
  ];

  // Equipment Category Filters
  equipmentCategories = [
    { label: 'Lifeboats & Rescue boat', checked: false },
    { label: 'Life Rafts', checked: false },
    { label: 'Life Jackets', checked: false },
    { label: 'Immersion Suits', checked: false },
    { label: 'Thermal Protective Aids', checked: false },
    { label: 'Visual Signals', checked: false },
    { label: 'Fire Extinguishers', checked: false },
    { label: 'Breathing Apparatus', checked: false }
  ];

  // Sample Equipment Data
  equipmentList: Equipment[] = [
    {
      id: 1,
      name: 'Temperature Calibrator',
      image: 'assets/temp-calibrator.png',
      serviceType: 'Annual Calibration on',
      vesselName: 'Anna Schulte',
      status: 'Active',
      serviceDate: '28-Jun-2025',
      maker: 'SCANSENSE',
      type: '650H',
      quantity: 1,
      dateOfManufacturing: '12-Jun-2020',
      dateOfExpiry: '28-Jun-2025',
      intervalType: 'SOLAS',
      intervalComments: '1 year',
      equipmentCategory: 'Category 03',
      serviceInterval: '1 year'
    },
    {
      id: 2,
      name: 'Temperature Calibrator',
      image: 'assets/temp-calibrator.png',
      serviceType: 'Annual Calibration on',
      vesselName: 'Anna Schulte',
      status: 'Active',
      serviceDate: '28-Jun-2025',
      maker: 'SCANSENSE',
      type: '650H',
      quantity: 1,
      dateOfManufacturing: '12-Jun-2020',
      dateOfExpiry: '28-Jun-2025',
      intervalType: 'SOLAS',
      intervalComments: '1 year',
      equipmentCategory: 'Category 03',
      serviceInterval: '1 year'
    },
    {
      id: 3,
      name: 'Temperature Calibrator',
      image: 'assets/temp-calibrator.png',
      serviceType: 'Annual Calibration on',
      vesselName: 'Anna Schulte',
      status: 'Active',
      serviceDate: '28-Jun-2025',
      maker: 'SCANSENSE',
      type: '650H',
      quantity: 1,
      dateOfManufacturing: '12-Jun-2020',
      dateOfExpiry: '28-Jun-2025',
      intervalType: 'SOLAS',
      intervalComments: '1 year',
      equipmentCategory: 'Category 03',
      serviceInterval: '1 year'
    },
    {
      id: 4,
      name: 'Temperature Calibrator',
      image: 'assets/temp-calibrator.png',
      serviceType: 'Annual Calibration on',
      vesselName: 'Anna Schulte',
      status: 'Active',
      serviceDate: '28-Jun-2025',
      maker: 'SCANSENSE',
      type: '650H',
      quantity: 1,
      dateOfManufacturing: '12-Jun-2020',
      dateOfExpiry: '28-Jun-2025',
      intervalType: 'SOLAS',
      intervalComments: '1 year',
      equipmentCategory: 'Category 03',
      serviceInterval: '1 year'
    }
  ];

  renewalHistory: RenewalHistory[] = [
    {
      id: 1,
      action: 'Equipment Service Renewed',
      equipmentType: 'All Equipment\'s',
      performedBy: 'John Doe',
      date: '22-Aug-2025',
      description: 'The temperature calibrator was renewed successfully'
    }
  ];

  selectedEquipment: Equipment | null = null;
  filteredEquipment: Equipment[] = [];

  allEquipmentsCount = 36;

  ngOnInit() {
    this.filteredEquipment = [...this.equipmentList];
    if (this.equipmentList.length > 0) {
      this.selectedEquipment = this.equipmentList[0];
    }
  }

  filterEquipment() {
    this.filteredEquipment = this.equipmentList.filter(eq => {
      const matchesSearch = !this.searchEquipment || 
        eq.name.toLowerCase().includes(this.searchEquipment.toLowerCase());
      return matchesSearch;
    });
  }

  selectEquipment(equipment: Equipment) {
    this.selectedEquipment = equipment;
  }

  renewEquipment() {
    alert('Renew equipment functionality will be implemented');
  }

  viewAllHistory() {
    alert('View all renewal history');
  }
}