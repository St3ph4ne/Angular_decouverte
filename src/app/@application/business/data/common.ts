import { Observable } from "rxjs";

/**
 * Definition d'un type de données
 */
export interface CommonData{
  id: number;
  text: string;
}

/**
 * Un type étendu qui peut être déclarer dans le même fichier
 */
export interface ExtendedCommonData{
  id: number;
  visible: boolean;
  commonDatas: CommonData[];
}

/**
 * On liste les interfaces à utiliser dans les services
 */
export abstract class Common {
  abstract getDatas(): Observable<CommonData[]>;
  abstract addData(data: CommonData): void;

}

