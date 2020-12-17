export class Restaurant {
    key: string;
    resto_name: string;
    resto_address: string;
    resto_city: string;
    resto_image: string;
    resto_rating: Float32Array;
    resto_hour_open: string;
    resto_hour_close: string;

    constructor(
        key: string,
        resto_name: string,
        resto_address: string,
        resto_city: string,
        resto_image: string,
        resto_rating: Float32Array,
        resto_hour_open: string,
        resto_hour_close: string
    ){}
}
