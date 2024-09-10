
def handler(event, context):
    print("Event: ", event)

    login_url = 'https://weather.dtn.com/dtnweather/common/signin.do'
    login_creds = {
        'username': 'dwsd2',
        'password': 'dwsd2'
    }
    # Hourly forecast table website.
    frcst_URL = 'https://weather.dtn.com/dtnweather/common/link.do'
    if daily:
        frcst_payload = {
        #     'contentId': 200527, ## hourly forecast
            'contentId': 200309, ## 15-day forecast
            'parentId' : 300050,
            'locationId' : 0,
            'stationId' : 'KDET',
        #     'planId' : -1,
            'selectorStationTypes' : 'forecast'
        }
    else:
        frcst_payload = {
            'contentId': 200527, ## hourly forecast
#             'contentId': 200309, ## 15-day forecast
            'parentId' : 300050,
            'locationId' : 0,
            'stationId' : 'KDET',
        #     'planId' : -1,
            'selectorStationTypes' : 'forecast'
        }
    stationIDs = {
        'Downtown Detroit' : 'KDET',
        'Troy' : 'KVLL',
        'DTW Airport' : 'KDTW'
    }
    keepLabelsHourly = [0,3,8,9,11,12,13,14,15]
    rowLabelsHourly = {
        0 : 'Hour',
        1 : 'Weather Condition',
        2 : 'Weather',
        3 : 'Temperature (°F)',
        4 : 'Feels Like (°F)',
        5 : 'Wet Bulb Globe (°F)',
        6 : 'Dew Point (°F)',
        7 : 'Humidity (%)',
        8 : 'Wind Direction',
        9 : 'Wind Speed (mph)',
        10 : 'Wind Gusts (mph)',
        11 : 'Precipitation Chance (%)',
        12 : 'Precipitation Type',
        13 : 'Precipitation Amount (in.)',
        14 : 'Snow Amount (in.)',
        15 : 'Ice Amount (in.)'
    }
    keepLabelsDaily = [0,2,4,5,10,11,12,13,14,15]
    rowLabelsDaily = {
        0 : 'Date',
        1 : 'Weather Condition',
        2 : 'Weather',
        3 : 'ET (Ref) (inches/day)',
        4 : 'Max. Temp (°F)',
        5 : 'Min. Temp (°F)',
        6 : 'Max. Feels Like (°F)',
        7 : 'Min. Feels Like (°F)',
        8 : 'Max. Wet Bulb Globe (°F)',
        9 : 'Min. Wet Bulb Globe (°F)',
        10: 'Dew Point (°F)',
        11: 'Humidity (%)',
        12: 'Avg. Wind Speed (mph)',
        13: 'Precipitation Chance (%)',
        14: 'Precipitation Amount (in.)',
        15: 'Precipitation Type',
        16: 'Snowfall (in.)'
    }

    replace = ['\xa0','\\xa0','\\t','\\r','\\n','<br>','</br>','\t','\r','\n','[',']','\'',',','                        ','  ']

    df = {}

    with requests.Session() as session:
        # login
        post = session.post(login_url,data=login_creds)

        # nav to hourly forecast table, bring in to soup
        for station in stationIDs:
            frcst_payload['stationId'] = stationIDs[station]
            daily = session.get(frcst_URL,params = frcst_payload)
            daily_soup = BeautifulSoup(daily.content.decode('utf-8'),'html.parser')

            forecastTable = daily_soup.find('div',{'id':'forecast'}).find_all('table')[0].find_all('tr')[1]
            forecastTable = forecastTable.findAll('table', {'class':['settingsForecastEvenWide', 'settingsForecastOddWide']})

            for i in range(len(forecastTable)):
                rows = forecastTable[i].find_all('td')
                collection = []
                for ii in keepLabelsDaily:
                    content = str(rows[ii].contents)
                    for j in replace:
                        content = content.replace(j,' ')
                    content = content.strip()
                    collection.append(content)


                df[(station,collection[0])] = collection[1:]

    df = pd.DataFrame(df, index=['Weather','Max. Temp (°F)','Min. Temp (°F)','Dew Point (°F)','Humidity (%)','Avg. Wind Speed (mph)',
                                     'Precipitation Chance (%)','Precipitation Amount (in.)','Precipitation Type'])

    #return df, stationIDs

    return {
        'statusCode': 200,
        'body': df
    }