import { Routes } from '@angular/router';
import { SearchResultComponent } from './search/search-result.component';

const routeConfig: Routes = [
    {
      path: '',
      component: SearchResultComponent,
      title: 'Search Event'
    }
  ];
  
  export default routeConfig;