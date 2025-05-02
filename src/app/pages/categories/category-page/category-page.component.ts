import { Component } from '@angular/core';
import {TableModule} from 'primeng/table';
import {Category} from '../../../models/category';

@Component({
  selector: 'app-category-page',
    imports: [
        TableModule
    ],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.scss'
})
export class CategoryPageComponent {
    public categories: Category[] = [
        {
            id: "1",
            name: "loyer",
            plannedInMonth: 500,
            type: "EXPENSE",
            createdDateTime: "2025-04-25"
        },
        {
            id: "2",
            name: "salaire",
            plannedInMonth: 5000,
            type: "INCOME",
            createdDateTime: "2025-04-25"
        },
        {
            id: "3",
            name: "mission",
            plannedInMonth: 5000,
            type: "INCOME",
            createdDateTime: "2025-03-25"},
        {
            id: "4",
            name: "canal+",
            plannedInMonth: 100,
            type: "INCOME",
            createdDateTime: "2025-04-25"
        },
    ];
}
