import { VarietyModel } from './variety-model';

export class CropModel {
  public cropId: string;
  public cropName: string;
  public varieties: VarietyModel[] = [];
}
