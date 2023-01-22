import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class New extends Component {
  articles = [
    {
        "source": {
            "id": "abc-news-au",
            "name": "ABC News (AU)"
        },
        "author": "Tracey Holmes",
        "title": "Afghanistan women's cricketers resettled in Australia feeling unsupported by international cricket bosses",
        "description": "Most of the women who should be playing cricket for Afghanistan have resettled in Australia since the Taliban took over the country, but they are disappointed by a lack of support from the International Cricket Council.",
        "url": "http://www.abc.net.au/news/2023-01-22/afghanistan-womens-cricket-ban-resettled-in-australia/101872060",
        "urlToImage": "https://live-production.wcms.abc-cdn.net.au/d718618805e29f723e0fa707421b0079?impolicy=wcms_crop_resize&cropH=2268&cropW=4032&xPos=0&yPos=0&width=862&height=485",
        "publishedAt": "2023-01-21T19:22:28Z",
        "content": "Afghanistan's contracted women cricketers have thanked Australia the government and its people for providing them with a future they never thought they would have after the Taliban took control of th… [+11975 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt": "2020-04-27T11:41:47Z",
        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt": "2020-03-30T15:26:05Z",
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Andy Rose, Christina Maxouris, Nick Valencia, Keith Allen",
        "title": "6 arrested after Atlanta protests over controversial 'Cop City' and fatal police shooting of activist - CNN",
        "description": "Several people were arrested Saturday evening in downtown Atlanta during protests that came in response to a proposed police training facility and the fatal police shooting of an activist earlier in the week.",
        "url": "https://www.cnn.com/2023/01/21/us/atlanta-cop-city-downtown-protest/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230121185858-01-atlanta-cop-city-rally-screengrab.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-01-22T16:15:00Z",
        "content": "Six people were arrested Saturday evening in downtown Atlanta, authorities said, during protests that came in response to a proposed police training facility and the fatal police shooting of an activ… [+5620 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CBS Sports"
        },
        "author": "",
        "title": "What we learned from NFL playoffs divisional round, Day 1: From Eagles' resurgence to Patrick Mahomes' injury - CBS Sports",
        "description": "Immediate reactions to Saturday's action",
        "url": "https://www.cbssports.com/nfl/news/what-we-learned-from-nfl-playoffs-divisional-round-day-1-from-eagles-resurgence-to-patrick-mahomes-injury/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/01/22/06a22554-4dec-40f8-8f54-fd8fc6633505/thumbnail/1200x675/dbd622440c0260c1ed3af0e71b9b09f5/eagles-hurts-kelce.jpg",
        "publishedAt": "2023-01-22T15:39:00Z",
        "content": "The next wave of NFL playoff football is well underway. The divisional round kicked off Saturday with a pair of regular-season rematches, and, boy, do we have a lot of ground to cover just in the wak… [+4210 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Bryn Nelson",
        "title": "We are all made of stars: The long trip from the big bang to the human body - CNN",
        "description": "Dan Levitt's book, \"What's Gotten Into You,\" evokes a series of striking and often forceful images in tracing how our cells, elements, atoms and subatomic particles all found their way to our brains and bones and bodies.",
        "url": "https://www.cnn.com/2023/01/22/world/dan-levitt-whats-gotten-into-you-book-scn/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230115191316-01-dan-levitt-whats-gotten-into-you-top-stock.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-01-22T15:17:00Z",
        "content": "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nIn its violent early years, Earth was a molten hellsca… [+6488 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "POLITICO.eu"
        },
        "author": "Carlo Martuscelli",
        "title": "Poland ready to build ‘smaller coalition’ to send tanks to Ukraine without Germany - POLITICO Europe",
        "description": "‘We will not passively watch Ukraine bleed to death,’ Polish Prime Minister Morawiecki says.",
        "url": "https://www.politico.eu/article/poland-ready-to-build-smaller-coalition-to-send-tanks-to-ukraine-without-germany-war-russia/",
        "urlToImage": "https://www.politico.eu/cdn-cgi/image/width=1200,height=630,fit=crop,quality=80,onerror=redirect/wp-content/uploads/2021/08/12/GettyImages-1233090716.jpg",
        "publishedAt": "2023-01-22T13:13:00Z",
        "content": "Press play to listen to this article\r\nVoiced by artificial intelligence.\r\nIf Germany won’t play ball, then Poland will find other partners to deliver Leopard 2 battle tanks to Ukraine, Polish Prime M… [+1983 chars]"
    },
    {
        "source": {
            "id": "usa-today",
            "name": "USA Today"
        },
        "author": "Bailey Schulz, USA TODAY",
        "title": "Mortgage buydowns are making a comeback as interest rates remain high - USA TODAY",
        "description": "Seller concessions like mortgage rate buydowns are picking up steam as sellers work to attract more buyers.",
        "url": "https://www.usatoday.com/story/money/personalfinance/real-estate/2023/01/22/mortgage-rate-buydown-lower-interest-rates/11077611002/",
        "urlToImage": "https://www.gannett-cdn.com/presto/2021/07/28/USAT/a0d5850e-df9c-4d01-acb6-43201e8d7aae-AP20281642246971.jpg?auto=webp&crop=5863,3298,x0,y298&format=pjpg&width=1200",
        "publishedAt": "2023-01-22T13:01:27Z",
        "content": "Anna Raymond was ready to make the switch from renting to owning a home last spring. But after five failed offers, she and her husband decided to take a step back from house hunting.  \r\nThen, in Dece… [+4650 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NBCSports.com"
        },
        "author": "Josh Alper",
        "title": "Nick Sirianni on Jalen Hurts: It’s like having Michael Jordan out there - NBC Sports",
        "description": "It didn’t take long for Eagles quarterback Jalen Hurts to set the tone for Saturday night’s game against the Giants.Hurts his wide receiver DeVonta Smith for 40 yards on the second snap of the game and the Eagles were up 7-0 thanks to a touchdown pass to tigh…",
        "url": "https://profootballtalk.nbcsports.com/2023/01/22/nick-sirianni-on-jalen-hurts-its-like-having-michael-jordan-out-there/",
        "urlToImage": "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2023/01/GettyImages-1246436228-e1674392435281.jpg",
        "publishedAt": "2023-01-22T13:00:00Z",
        "content": "It didnt take long for Eagles quarterback Jalen Hurts to set the tone for Saturday nights game against the Giants.\r\nHurts his wide receiver DeVonta Smith for 40 yards on the second snap of the game a… [+1265 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "LIVE: 10 dead in Monterey Park mass shooting, police say - ABC7",
        "description": "Ten people were killed and 10 were wounded in a mass shooting at a Lunar New Year celebration in Monterey Park, police said. The gunman has not yet been loca...",
        "url": "https://www.youtube.com/watch?v=vJzx5SYl2ZI",
        "urlToImage": "https://i.ytimg.com/vi/vJzx5SYl2ZI/maxresdefault_live.jpg",
        "publishedAt": "2023-01-22T12:58:05Z",
        "content": null
    },
    {
        "source": {
            "id": "fox-news",
            "name": "Fox News"
        },
        "author": "Anders Hagstrom",
        "title": "Santos admits he dressed up as a woman for ‘fun,’ but denies being a drag queen - Fox News",
        "description": "Embattled Rep. George Santos admitted to dressing as a woman in Brazil \"for fun\" on Saturday, telling reporters questioning him to \"sue me for having a life.\"",
        "url": "https://www.foxnews.com/politics/santos-admits-dressed-woman-fun-denies-being-drag-queen",
        "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/01/george-santos-halls-of-congress.jpg",
        "publishedAt": "2023-01-22T12:14:00Z",
        "content": "Embattled Rep. George Santos, R-N.Y., admitted he dressed up as a woman \"for fun\" at a party in Brazil, but denied ever performing as a drag queen.\r\nSantos made the comments to reporters while caught… [+3291 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "WDIV ClickOnDetroit"
        },
        "author": "Brandon Roux",
        "title": "Snow to hit Metro Detroit this week -- here's what you need to know - WDIV ClickOnDetroit",
        "description": "Good Sunday morning, Metro Detroit! Who is ready for some snow? ❄️",
        "url": "https://www.clickondetroit.com/weather/2023/01/22/snow-to-hit-metro-detroit-this-week-heres-what-you-need-to-know/",
        "urlToImage": "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/arc-cf/01-22-2023/t_95800b7c26394f9e9b7f0f81cd7a334d_name_image.jpg?_a=ATO2Bfe0",
        "publishedAt": "2023-01-22T12:12:56Z",
        "content": "4Warn Weather Good Sunday morning! Who is ready for some snow? \r\nWe have a snowmaker approaching Sunday morning from the south and west, moving into Metro Detroit after 8-9 a.m. Temperatures are in t… [+2820 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Max Foster, Issy Ronald",
        "title": "Buckingham Palace reveals details of three-day celebration to mark King Charles III's coronation - CNN",
        "description": "Buckingham Palace on Saturday revealed details of King Charles III's coronation, set to be less extravagant than his mother's ceremony 70 years ago, in a reflection of the cost-of-living crisis many Britons are enduring.",
        "url": "https://www.cnn.com/2023/01/21/uk/king-charles-coronation-details-intl-gbr/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230121063002-01-king-charles-coronation.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-01-22T12:05:00Z",
        "content": "Buckingham Palace on Saturday revealed details of King Charles IIIs coronation that will see three days of celebrations across the country in which the public will be invited to participate.\r\nThe cor… [+5176 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "SciTechDaily"
        },
        "author": null,
        "title": "Revealing the Start of Time Itself: Ripples in the Fabric of the Universe May Peer Back to the Beginning of Everything We Know - SciTechDaily",
        "description": "Scientists have advanced in discovering how to use ripples in space-time known as gravitational waves to peer back to the beginning of everything we know. The researchers say they can better understand the state of the cosmos shortly after the Big Bang by lea…",
        "url": "https://scitechdaily.com/revealing-the-start-of-time-itself-ripples-in-the-fabric-of-the-universe-may-peer-back-to-the-beginning-of-everything-we-know/",
        "urlToImage": "https://scitechdaily.com/images/Neutron-Stars-Merging-To-Form-Black-Hole.jpg",
        "publishedAt": "2023-01-22T11:43:33Z",
        "content": "ByPrinceton Plasma Physics LaboratoryJanuary 22, 2023\r\nNumerical simulation of the neutron stars merging to form a black hole, with their accretion disks interacting to produce electromagnetic waves.… [+5884 chars]"
    },
    {
        "source": {
            "id": "independent",
            "name": "Independent"
        },
        "author": "Andrea Blanco",
        "title": "Alec Baldwin news - live: Actor to continue filming Rust after involuntary manslaughter charges - The Independent",
        "description": "Alec Baldwin, Hannah Gutierrez Reed and David Halls face charges over the fatal on-set shooting of cinematographer Halyna Hutchins",
        "url": "https://www.independent.co.uk/arts-entertainment/films/news/alec-baldwin-shooting-rust-charge-latest-b2266882.html",
        "urlToImage": "https://static.independent.co.uk/2023/01/19/12/rust%20shooting%20copy.jpg?quality=75&width=1200&auto=webp",
        "publishedAt": "2023-01-22T11:40:00Z",
        "content": "Get our free weekly email for all the latest cinematic news from our film critic Clarisse Loughrey\r\nGet our The Life Cinematic email for free\r\nAlec Baldwin will continue to film Rust as he faces invo… [+9127 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Cosmopolitan.com"
        },
        "author": "Colin Bedell",
        "title": "Horoscope for the Week of January 23, 2023, Weekly Horoscope - Cosmopolitan",
        "description": "Everything you need to know for the upcoming week.",
        "url": "https://www.cosmopolitan.com/lifestyle/a42579505/weekly-horoscope-january-22-2023/",
        "urlToImage": "https://hips.hearstapps.com/hmg-prod/images/horoscope-1673283180.png?crop=1xw:0.9241461477362987xh;center,top&resize=1200:*",
        "publishedAt": "2023-01-22T11:03:13Z",
        "content": "Overview: Romance is a spiritual practice! Venus enters soulful Pisces on Thursday and stays there until February 20, inspiring our relationships to be more healing and loving. Then Sundays Sun-Mars … [+5292 chars]"
    },
    {
        "source": {
            "id": "fox-news",
            "name": "Fox News"
        },
        "author": "Lawrence Richard",
        "title": "Fight world reacts after UFC 283: Jamahal Hill wins light heavyweight championship, Glover Teixeira retires - Fox News",
        "description": "The Ultimate Fighting Championship in Rio de Janeiro Saturday night featured Jamahal Hill winning the light heavyweight belt and two Brazilian legends retiring from the sport.",
        "url": "https://www.foxnews.com/sports/fight-world-reacts-jamahal-hill-wins-light-heavyweight-championship-glover-teixeira-retires",
        "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/01/GettyImages-1246435134.jpg",
        "publishedAt": "2023-01-22T10:45:00Z",
        "content": "The fight world swiftly reacted after UFC fighter Jamahal Hill defeated Glover Teixeira in Rio de Janeiro at UFC 283 Saturday night, capturing the light heavyweight championship and cementing his pla… [+3674 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Yahoo Entertainment"
        },
        "author": "Miranda Siwak",
        "title": "Kylie Jenner Reveals How to Correctly Pronounce Her and Travis Scott’s Son Aire’s Name: Details - Yahoo Entertainment",
        "description": "Setting the record straight! Kylie Jenner shared on Saturday, January 21, that her and Travis Scott’s baby boy is named Aire Webster, prompting speculation...",
        "url": "https://www.yahoo.com/entertainment/kylie-jenner-reveals-correctly-pronounce-102631517.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/mBp3sn9cG_H5hIdAlcykag--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD0xMjAw/https://media.zenfs.com/en/us_magazine_896/47aa7e4b668bc728d7e2a750b2584cb6",
        "publishedAt": "2023-01-22T10:26:31Z",
        "content": "Kylie Jenner and Travis Scott.Image Press Agency/NurPhoto/Shutterstock\r\nSetting the record straight! Kylie Jenner shared on Saturday, January 21, that her and Travis Scotts baby boy is named Aire Web… [+2447 chars]"
    },
    {
        "source": {
            "id": "associated-press",
            "name": "Associated Press"
        },
        "author": "Emily Wang Fujiyama",
        "title": "China rings in Year of Rabbit with most COVID rules lifted - The Associated Press",
        "description": "BEIJING (AP) — People across China rang in the Lunar New Year on Sunday with large family gatherings and crowds visiting temples after the government lifted its strict “zero-COVID” policy, marking the biggest festive celebration since the pandemic began three…",
        "url": "https://apnews.com/article/health-hong-kong-china-pandemics-covid-bff239df38b1206aa2d8c63043a47ecd",
        "urlToImage": "https://storage.googleapis.com/afs-prod/media/2d8051460c3649bb9310605f4b8f0567/3000.webp",
        "publishedAt": "2023-01-22T10:18:45Z",
        "content": "BEIJING (AP) People across China rang in the Lunar New Year on Sunday with large family gatherings and crowds visiting temples after the government lifted its strict zero-COVID policy, marking the bi… [+4723 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Faith Karimi",
        "title": "This 'Cryptoqueen' scammed investors out of $4 billion, the FBI says. Then she boarded a plane and disappeared - CNN",
        "description": "Ruja Ignatova launched her cryptocurrency OneCoin with bold statements like, \"In two years, nobody will speak about bitcoin anymore.\" Investors around the world flooded her with cash, but as OneCoin collapsed under criminal investigations, she boarded a fligh…",
        "url": "https://www.cnn.com/2023/01/22/business/ruja-ignatova-cryptoqueen-fbi-most-wanted-cec/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230111150411-ruja-ignatova-speech.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-01-22T09:05:00Z",
        "content": "Ruja Ignatova strode onto the stage in a flowing burgundy ball gown adorned with black sparkles. Beams of light flashed, fireballs erupted and Alicia Keys Girl on Fire blared through the speakers.\r\nL… [+10280 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "President Biden's home searched by Justice Department, more classified material found - ABC7",
        "description": "The Department of Justice searched President Joe Biden's Delaware home and took possession of more items containing classified information, his lawyers said ...",
        "url": "https://www.youtube.com/watch?v=LwVAvD4bujo",
        "urlToImage": "https://i.ytimg.com/vi/LwVAvD4bujo/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGF0gZShOMA8=&rs=AOn4CLAVhprWvhxXd1RSZsJ2w5wYmfaPkg",
        "publishedAt": "2023-01-22T06:58:43Z",
        "content": null
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Zoe Sottile",
        "title": "As egg prices rise, so do attempts to smuggle them from Mexico, say US Customs officials - CNN",
        "description": "High prices are driving an increase in attempts to bring eggs into the US from Mexico, according to border officials.",
        "url": "https://www.cnn.com/2023/01/22/us/mexico-border-egg-smuggling-trnd/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230120134415-mexico-eggs-border.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-01-22T06:08:00Z",
        "content": "High prices are driving an increase in attempts to bring eggs into the US from Mexico, according to border officials.\r\nOfficers at the San Diego Customs and Border Protection Office have seen an incr… [+2289 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Here's how 1 Bay Area tech expert explains how Google layoffs will impact Silicon Valley - ABC7 News Bay Area",
        "description": "Twelve thousand employees from Google's parent company Alphabet join the other tens of thousands recently cut from companies across Silicon Valley as they we...",
        "url": "https://www.youtube.com/watch?v=ocJmsI315dI",
        "urlToImage": "https://i.ytimg.com/vi/ocJmsI315dI/maxresdefault.jpg",
        "publishedAt": "2023-01-22T05:43:09Z",
        "content": null
    }
]
  constructor(){
    super();
    console.log("Hello I am a constructor from News component.");
    this.state =  {
      articles: this.articles,
      loading: false
    }
  }

  render() {
    return (
      <div className="container">
        <h2>Daily News - Top Headlines</h2>
        <div className="row my-3">
        {this.state.articles.map((element)=>{
          return <div className="col-md-3" key={element.url}>
          <NewsItem title={element.title.length >= 45 ? element.title.slice(0, 45) : element.title}  description={element.description.length >= 80 ? element.description.slice(0, 80) : element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
        })}
        </div> 
      </div>
    )
  }
}

export default New
