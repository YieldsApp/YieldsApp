import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { CropService } from '../../services/crop.service';
import { CropModel } from '../../models/CropModel';


@Component({
  selector: 'app-select-crop',
  templateUrl: './select-crop.component.html',
  styleUrls: ['./select-crop.component.scss']
})
export class SelectCropComponent implements OnInit {
  selctedCrop: CropModel;

  results: string[];
  //vegetables: string[] = [
  //  'artichoke'
  //  , 'aubergine(eggplant)'
  //  , 'amrud'
  //  , 'asparagus'
  //  , 'legumes'
  //  , 'alfalfa sprouts                          '
  //  , 'azuki beans(or adzuki)                   '
  //  , 'bean sprouts                             '
  //  , 'black beans                              '
  //  , 'black-eyed peas                          '
  //  , 'borlotti bean                            '
  //  , 'broad beans                              '
  //  , 'chickpeas, garbanzos, or ceci beans      '
  //  , 'green beans                              '
  //  , 'kidney beans                             '
  //  , 'lentils                                  '
  //  , 'lima beans or Butter bean                '
  //  , 'mung beans                               '
  //  , 'navy beans                               '
  //  , 'pinto beans                              '
  //  , 'runner beans                             '
  //  , 'split peas                               '
  //  , 'soy beans                                '
  //  , 'peas                                     '
  //  , 'mangetout or snap peas                   '
  //  , 'broccoflower(a hybrid)                   '
  //  , 'broccoli(calabrese)                      '
  //  , 'brussels sprouts                         '
  //  , 'cabbage                                  '
  //  , 'kohlrabi                                 '
  //  , 'cauliflower                              '
  //  , 'celery                                   '
  //  , 'endive                                   '
  //  , 'fiddleheads                              '
  //  , 'frisee                                   '
  //  , 'fennel                                   '
  //  , 'greens                                   '
  //  , 'beet greens(chard)                       '
  //  , 'bok choy                                 '
  //  , 'chard(beet greens)                       '
  //  , 'collard greens                           '
  //  , 'kale                                     '
  //  , 'mustard greens                           '
  //  , 'spinach                                  '
  //  , 'quinoa                                   '
  //  , 'herbs and spices                         '
  //  , 'anise                                    '
  //  , 'basil                                    '
  //  , 'caraway                                  '
  //  , 'cilantro(also known as coriander)        '
  //  , 'chamomile                                '
  //  , 'dill                                     '
  //  , 'fennel                                   '
  //  , 'lavender                                 '
  //  , 'lemon Grass                              '
  //  , 'marjoram                                 '
  //  , 'oregano                                  '
  //  , 'parsley                                  '
  //  , 'rosemary                                 '
  //  , 'sage                                     '
  //  , 'thyme                                    '
  //  , 'lettuce                                  '
  //  , 'arugula                                  '
  //  , 'mushrooms(actually a fungus, not a plant)'
  //  , 'nettles                                  '
  //  , 'New Zealand spinach                      '
  //  , 'okra                                     '
  //  , 'onions                                   '
  //  , 'Chives                                   '
  //  , 'Garlic                                   '
  //  , 'Leek                                     '
  //  , 'onion                                    '
  //  , 'shallot                                  '
  //  , 'scallion(spring onion UK, green onion US)'
  //  , 'parsley'
  //  , 'peppers(biologically fruits, but taxed as vegetables)'
  //  , 'ell pepper'
  //  , 'hili pepper'
  //  , 'Jalapeño                                                     '
  //  , 'Habanero                                                     '
  //  , 'Paprika                                                      '
  //  , 'Tabasco pepper                                               '
  //  , 'Cayenne pepper                                               '
  //  , 'radicchio                                                    '
  //  , 'rhubarb                                                      '
  //  , 'root vegetables                                              '
  //  , 'beetroot(UK) Beet(US)                                        '
  //  , 'mangel-wurzel: a variety of beet used mostly as cattlefeed   '
  //  , 'carrot                                                       '
  //  , 'celeriac                                                     '
  //  , 'daikon                                                       '
  //  , 'ginger                                                       '
  //  , 'parsnip                                                      '
  //  , 'rutabaga                                                     '
  //  , 'turnip                                                       '
  //  , 'radish                                                       '
  //  , 'wasabi                                                       '
  //  , 'horseradish                                                  '
  //  , 'white radish                                                 '
  //  , 'salsify(Oyster Plant)                                        '
  //  , 'skirret                                                      '
  //  , 'sweetcorn[1]                                                 '
  //  , 'topinambur                                                   '
  //  , 'squashes(biologically fruits, but taxed as vegetables)       '
  //  , 'acorn squash                                                 '
  //  , 'bitter melon                                                 '
  //  , 'butternut squash                                             '
  //  , 'banana squash                                                '
  //  , 'courgette(UK), Zucchini(US)                                  '
  //  , 'cucumber(biologically fruits, but taxed as vegetables)       '
  //  , 'delicata                                                     '
  //  , 'gem squash                                                   '
  //  , 'hubbard squash                                               '
  //  , 'marrow(UK) Squash(US)                                        '
  //  , 'patty pans                                                   '
  //  , 'pumpkin                                                      '
  //  , 'spaghetti squash                                             '
  //  , 'tat soi                                                      '
  //  , 'tomato(biologically a fruit, but taxed as a vegetable)       '
  //  , 'tubers                                                       '
  //  , 'jicama                                                       '
  //  , 'jerusalem artichoke                                          '
  //  , 'potato                                                       '
  //  , 'quandong                                                     '
  //  , 'sunchokes                                                    '
  //  , 'sweet potato                                                 '
  //  , 'taro                                                         '
  //  , 'yam                                                          '
  //  , 'water chestnut                                               '
  //  , 'watercress'
  //  ,]

  constructor(public cropService: CropService) { }

  ngOnInit() {
  }
  
  search(event) {
    this.cropService.getCropList().subscribe((result: CropModel[]) => {
      this.results = _.filter(result, (crop) => _.includes(crop.name, event.query));
    }, error => console.error(error));
    //this.results = _.filter(this.vegetables, (vegetable) => _.includes(vegetable, event.query));
  }
}

