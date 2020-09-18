//psuedocode for Jest based automated test

describe('Cards', () => {
  it('cards renders without crashing given the required props', () => {
    
    const wrapper = shallow(<Cards filters={ {} } />);
    wrapper.setState( { isFetching: false, response: { status: 'success',data: [
      {"flight_number":5,"mission_name":"RazakSat","mission_id":[],"launch_year":"2009","launch_date_unix":1247456100,"launch_date_utc":"2009-07-13T03:35:00.000Z","launch_date_local":"2009-07-13T15:35:00+12:00","is_tentative":false,"tentative_max_precision":"hour","tbd":false,"launch_window":0,"rocket":{"rocket_id":"falcon1","rocket_name":"Falcon 1","rocket_type":"Merlin C","first_stage":{"cores":[{"core_serial":"Merlin3C","flight":1,"block":null,"gridfins":false,"legs":false,"reused":false,"land_success":null,"landing_intent":false,"landing_type":null,"landing_vehicle":null}]},"second_stage":{"block":1,"payloads":[{"payload_id":"RazakSAT","norad_id":[35578],"reused":false,"customers":["ATSB"],"nationality":"Malaysia","manufacturer":"Satrec","payload_type":"Satellite","payload_mass_kg":200,"payload_mass_lbs":440,"orbit":"LEO","orbit_params":{"reference_system":"geocentric","regime":"low-earth","longitude":null,"semi_major_axis_km":7048.969,"eccentricity":0.0017123,"periapsis_km":658.765,"apoapsis_km":682.904,"inclination_deg":8.9884,"period_min":98.163,"lifespan_years":null,"epoch":"2020-08-09T21:34:39.000Z","mean_motion":14.66946479,"raan":344.7601,"arg_of_pericenter":283.4087,"mean_anomaly":76.4195}}]},"fairings":{"reused":false,"recovery_attempt":false,"recovered":false,"ship":null}},"ships":[],"telemetry":{"flight_club":null},"launch_site":{"site_id":"kwajalein_atoll","site_name":"Kwajalein Atoll","site_name_long":"Kwajalein Atoll Omelek Island"},"launch_success":true,"links":{"mission_patch":"https://images2.imgbox.com/8d/fc/0qdZMWWx_o.png","mission_patch_small":"https://images2.imgbox.com/a7/ba/NBZSw3Ho_o.png","reddit_campaign":null,"reddit_launch":null,"reddit_recovery":null,"reddit_media":null,"presskit":"http://www.spacex.com/press/2012/12/19/spacexs-falcon-1-successfully-delivers-razaksat-satellite-orbit","article_link":"http://www.spacex.com/news/2013/02/12/falcon-1-flight-5","wikipedia":"https://en.wikipedia.org/wiki/RazakSAT","video_link":"https://www.youtube.com/watch?v=yTaIDooc8Og","youtube_id":"yTaIDooc8Og","flickr_images":[]},"details":null,"upcoming":false,"static_fire_date_utc":null,"static_fire_date_unix":null,"timeline":{"webcast_liftoff":5},"crew":null}]
    } } );
    expect(toJson(wrapper)).toMatchSnapshot();
  })
});

describe('Cards with filters', () => {
    it('renders with filters without crashing given the required props', () => {
      
      const wrapper = mount(<Cards filters={ {} } />);
      wrapper.setState( { isFetching: false, response: { data: [
        {"flight_number":5,"mission_name":"RazakSat","mission_id":[],"launch_year":"2009","launch_date_unix":1247456100,"launch_date_utc":"2009-07-13T03:35:00.000Z","launch_date_local":"2009-07-13T15:35:00+12:00","is_tentative":false,"tentative_max_precision":"hour","tbd":false,"launch_window":0,"rocket":{"rocket_id":"falcon1","rocket_name":"Falcon 1","rocket_type":"Merlin C","first_stage":{"cores":[{"core_serial":"Merlin3C","flight":1,"block":null,"gridfins":false,"legs":false,"reused":false,"land_success":null,"landing_intent":false,"landing_type":null,"landing_vehicle":null}]},"second_stage":{"block":1,"payloads":[{"payload_id":"RazakSAT","norad_id":[35578],"reused":false,"customers":["ATSB"],"nationality":"Malaysia","manufacturer":"Satrec","payload_type":"Satellite","payload_mass_kg":200,"payload_mass_lbs":440,"orbit":"LEO","orbit_params":{"reference_system":"geocentric","regime":"low-earth","longitude":null,"semi_major_axis_km":7048.969,"eccentricity":0.0017123,"periapsis_km":658.765,"apoapsis_km":682.904,"inclination_deg":8.9884,"period_min":98.163,"lifespan_years":null,"epoch":"2020-08-09T21:34:39.000Z","mean_motion":14.66946479,"raan":344.7601,"arg_of_pericenter":283.4087,"mean_anomaly":76.4195}}]},"fairings":{"reused":false,"recovery_attempt":false,"recovered":false,"ship":null}},"ships":[],"telemetry":{"flight_club":null},"launch_site":{"site_id":"kwajalein_atoll","site_name":"Kwajalein Atoll","site_name_long":"Kwajalein Atoll Omelek Island"},"launch_success":true,"links":{"mission_patch":"https://images2.imgbox.com/8d/fc/0qdZMWWx_o.png","mission_patch_small":"https://images2.imgbox.com/a7/ba/NBZSw3Ho_o.png","reddit_campaign":null,"reddit_launch":null,"reddit_recovery":null,"reddit_media":null,"presskit":"http://www.spacex.com/press/2012/12/19/spacexs-falcon-1-successfully-delivers-razaksat-satellite-orbit","article_link":"http://www.spacex.com/news/2013/02/12/falcon-1-flight-5","wikipedia":"https://en.wikipedia.org/wiki/RazakSAT","video_link":"https://www.youtube.com/watch?v=yTaIDooc8Og","youtube_id":"yTaIDooc8Og","flickr_images":[]},"details":null,"upcoming":false,"static_fire_date_utc":null,"static_fire_date_unix":null,"timeline":{"webcast_liftoff":5},"crew":null}]
      } } );
      expect(toJson(wrapper)).toMatchSnapshot();
    })
  });

  describe('Cards with all filters and mock axios', () => {

    //mock axios
    const data = [ {"flight_number":5,"mission_name":"RazakSat","mission_id":[],"launch_year":"2009","launch_date_unix":1247456100,"launch_date_utc":"2009-07-13T03:35:00.000Z","launch_date_local":"2009-07-13T15:35:00+12:00","is_tentative":false,"tentative_max_precision":"hour","tbd":false,"launch_window":0,"rocket":{"rocket_id":"falcon1","rocket_name":"Falcon 1","rocket_type":"Merlin C","first_stage":{"cores":[{"core_serial":"Merlin3C","flight":1,"block":null,"gridfins":false,"legs":false,"reused":false,"land_success":null,"landing_intent":false,"landing_type":null,"landing_vehicle":null}]},"second_stage":{"block":1,"payloads":[{"payload_id":"RazakSAT","norad_id":[35578],"reused":false,"customers":["ATSB"],"nationality":"Malaysia","manufacturer":"Satrec","payload_type":"Satellite","payload_mass_kg":200,"payload_mass_lbs":440,"orbit":"LEO","orbit_params":{"reference_system":"geocentric","regime":"low-earth","longitude":null,"semi_major_axis_km":7048.969,"eccentricity":0.0017123,"periapsis_km":658.765,"apoapsis_km":682.904,"inclination_deg":8.9884,"period_min":98.163,"lifespan_years":null,"epoch":"2020-08-09T21:34:39.000Z","mean_motion":14.66946479,"raan":344.7601,"arg_of_pericenter":283.4087,"mean_anomaly":76.4195}}]},"fairings":{"reused":false,"recovery_attempt":false,"recovered":false,"ship":null}},"ships":[],"telemetry":{"flight_club":null},"launch_site":{"site_id":"kwajalein_atoll","site_name":"Kwajalein Atoll","site_name_long":"Kwajalein Atoll Omelek Island"},"launch_success":true,"links":{"mission_patch":"https://images2.imgbox.com/8d/fc/0qdZMWWx_o.png","mission_patch_small":"https://images2.imgbox.com/a7/ba/NBZSw3Ho_o.png","reddit_campaign":null,"reddit_launch":null,"reddit_recovery":null,"reddit_media":null,"presskit":"http://www.spacex.com/press/2012/12/19/spacexs-falcon-1-successfully-delivers-razaksat-satellite-orbit","article_link":"http://www.spacex.com/news/2013/02/12/falcon-1-flight-5","wikipedia":"https://en.wikipedia.org/wiki/RazakSAT","video_link":"https://www.youtube.com/watch?v=yTaIDooc8Og","youtube_id":"yTaIDooc8Og","flickr_images":[]},"details":null,"upcoming":false,"static_fire_date_utc":null,"static_fire_date_unix":null,"timeline":{"webcast_liftoff":5},"crew":null} ];

    it('fetch articles on Initial Load', async () => {
      const wrapper = mount(<Cards filters={{}}/>);
      try{ 
        await axios.get.mockImplementationOnce(() => Promise.resolve(data));
      } catch(e) {
        console.log(e);
      } finally {
        wrapper.setState( { response: { data: [ data ] } } );
        expect(toJson(wrapper)).toMatchSnapshot();
      }
    });

    it('renders with all filters without crashing given the required props', () => {
      
      const wrapper = mount(<Cards filters={ {launch_year: 2013,launch_success: false,land_success: false} } />);
      expect(toJson(wrapper)).toMatchSnapshot();
    })
  });