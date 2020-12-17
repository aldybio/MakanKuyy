import { Injectable } from '@angular/core';
import { Aboutus } from './about-us.model';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {
  private aboutus: Aboutus[] = [
    {
      url: 'https://instagram.fdps5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/22580297_269218003599599_2183509412772052992_n.jpg?_nc_ht=instagram.fdps5-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=apn9VS1v7KgAX8kZi7X&tp=1&oh=8e492705486481d996ae907483cdd766&oe=6006FB4E',
      nama: 'Arnoldus Bio Dhae',
      nim : '00000023759'
    },
    {
      url: 'https://instagram.fcgk27-1.fna.fbcdn.net/v/t51.2885-19/s150x150/117610163_3011333012311027_4762675807962004776_n.jpg?_nc_ht=instagram.fcgk27-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=6fwy56y4v50AX-vy6GR&tp=1&oh=9ad52d395abe57e0526f162236dd0b51&oe=60043DE0',
      nama: 'Edward Louis Rago',
      nim : '00000022464'
    },
    {
      url: 'https://instagram.fdps5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/60405642_604214063416135_1916129783150024487_n.jpg?_nc_ht=instagram.fdps5-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=4UZAtElYvp4AX889X9I&tp=1&oh=b9ac9b7af84bee3e0b302132675344cf&oe=60034C29',
      nama: 'Vincent Tjeng Tjendra',
      nim : '00000022700'
    },
    {
      url: 'https://instagram.fdps5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/67423489_355684888700629_6503070153677891771_n.jpg?_nc_ht=instagram.fdps5-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=V-jv6YIW7jcAX_YylKO&tp=1&oh=b576f3d734a467838fdbd1fe5dc75755&oe=60038472',
      nama: 'Charles Matheus Rianaldo',
      nim : '00000022805'
    },
    {
      url: 'https://instagram.fdps5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/21909183_274981463006376_2512602988246204416_n.jpg?_nc_ht=instagram.fdps5-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=ysMtB_tkzkYAX88mh_O&tp=1&oh=7bc9f75bd2b42f1a8e64e4548f3fbffe&oe=6006F97A',
      nama: 'Yoshua',
      nim : '00000020472'
    }
  ];

  constructor() { }
  getAllAboutus() {
    return [...this.aboutus];
  }
  
  getAbout(nim:string){
    return {...this.aboutus.find(person=>{
      return person.nim === nim;
    })}
  }
}
