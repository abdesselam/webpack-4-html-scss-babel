import fileToJson from './fileToDb'

import ooredooGeojson from '../../data/ooredoo'
import djezzyGeojson from '../../data/djezzy'
import algeriePosteGeojson from '../../data/algeriePoste'
import reseau4GLteGeojson from '../../data/reseau4GLte'
import fibreObtiqueGeojson from '../../data/fibreObtique'
import MSANGeojson from '../../data/MSAN'


export default function (){
    console.log('file to db------')
                       fileToJson('http://localhost:3000/djezzy',djezzyGeojson.features);
                       fileToJson('http://localhost:3000/ooredoo',ooredooGeojson.features);
                       fileToJson('http://localhost:3000/algerieposte',algeriePosteGeojson.features);
                       fileToJson('http://localhost:3000/lte',reseau4GLteGeojson.features);
                       fileToJson('http://localhost:3000/msan',MSANGeojson.features);
                       fileToJson('http://localhost:3000/lfo',fibreObtiqueGeojson.features);
}