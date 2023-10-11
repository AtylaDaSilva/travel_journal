import map_arrow_icon from '../img/map_arrow_icon.png';

export default function Card(props) {
    const data = props.entry_data;

    return (
        <div className="Card">
            <div className="card_header">
                <img src={ data.image_url } alt="Card Image" className='card_header_img' />
            </div>
            <div className="card_body">
                <div className='card_body_location'>
                    <img src={ map_arrow_icon } alt="Map Arrow Icon" className='card_body_map_icon'/>
                    <span className='card_body_country_name'>{ data.country_name.toUpperCase() }</span>
                    <a href={ data.google_maps_url } target='_blank' className='card_body_url'>View on Google Maps</a>
                </div>
                <div className='card_body_title'>
                    <h1>{ data.entry_title }</h1>
                </div>
                <div className='card_body_date'>
                    <span><b>{data.date_from} - { data.date_to }</b></span>
                </div>
                <div className='card_body_description'>
                    <p>{ data.entry_description }</p>
                </div>
            </div>
        </div>
    );
}