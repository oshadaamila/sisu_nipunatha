import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tharaga';
  list = ['first', 'seconf', 'third', 'fourth']
  tharaga_list = ['ප්‍රායෝගික දැනුම', 'පද්‍ය ගායනා', 'දහම් දැනුම', 'ගද්‍ය රචනා', 'කථික', 'චිත්‍ර', 'මව් පිය ගුණ ගායනා']
  grade_by_tharaga = { 'ප්‍රායෝගික දැනුම': ["1 ශ්‍ර‌ේණිය", "2 ශ්‍ර‌ේණිය"] }
  grade_list = []
  selected_value_tharaga_cmb = "තරගය තා‌ේරන්න‍‍‍‍..."
  selected_value_grade_cmb = "ශ්‍ර‌ේණිය තා‌ේරන්න‍‍‍‍..."
  gr_cmb_is_diabled = true

  onSubmitClick() {
    console.log("submit button clicked")
  }
  onGradeComboBoxItemSelect(item) {
    console.log("grade combo box loaded"+item)
  }

  onTharagaComboBoxItemSelect(item) {
    this.gr_cmb_is_diabled = false
    this.selected_value_tharaga_cmb = item
    this.grade_list = this.grade_by_tharaga[item]
  }
}
