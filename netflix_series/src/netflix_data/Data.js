const netflixData = [
    {
        name: "Money Heist",
        seasons: "4 Seasons",
        img: 'https://occ-0-2482-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABW8w7KYjTPOuOFnyh6reFDZlYWbTO3SF4UZjVdQZZDCNJwIEXZsfov2wm3_87jnvQkaR4or90dW8r_fxOzUn9Hak98ZhtQV6nIvz5yWVP6ZZHoL-.jpg?r=b00',
        link: 'https://www.netflix.com/in/title/80192098'
    },
    {
        name: "Lucifier",
        seasons: "5 Seasons",
        img: 'https://occ-0-2482-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcbo-nxSOvYRsasS1xYKswHCkbLFL3eXmytPGYI6QCRCieCq_9q0XngUWAoOsNCh7o0_M7KpS-OyJYfy7XDt_f0-jwUNeFeBbTrGtvhLb5_fgDui.jpg?r=cb5',
        link: 'https://www.netflix.com/in/title/80057918'
    },
    {
        name: "Stranger Things",
        seasons: "3 Seasons",
        img: 'https://occ-0-2482-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVnhH__CW4TB6e3HTlRsCnJdZFA_CoQtxsEPKiC8XDF_9j7BXOQvhr953K_Cob6hap6Wv7QPJ0euDK8hIraC2zTix0_b3m_YEG6qsVWUx5o0TiCE.jpg?r=8da',
        link: 'https://www.netflix.com/in/title/80057281'
    },
    {
        name: "Sacred Games",
        seasons: "2 Seasons",
        img: 'https://occ-0-2482-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcSuxXFfDHykG6Z5_6vgV-j7OgjLzfJR3eZjooc0bUXlO3YWe6qQaZXMMI0ANC0LcNpDs1vDeu7oAty4M50vBT-spdrTPECYeZ-nkOXy_P-kXYdv.jpg?r=495',
        link: 'https://www.netflix.com/in/title/80115328'
    },
    {
        name: "Dark",
        seasons: "3 Seasons",
        img: 'https://occ-0-2482-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfGIlV8WGvjI2mUB4WhkeBsUuAhs65gJh1QhYdLlyN4EkfUcTPiZhQf10g3aOn49y4PxYrUhnIo1Hn5LgMycEAbSabGBQyOKW35XxGRmybqJ3B_L.jpg?r=1ba',
        link: 'https://www.netflix.com/in/title/80100172'
    },
    {
        name: "Punisher",
        seasons: "2 Seasons",
        img: 'https://occ-0-2482-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfGwbN3tQ2tgPngGVAc7qBa2j-8bWoshsoE5cSnWUbXzyD9PoyUlv1ttYxpOyspc-YPNFsGP0iTfWeIyRnivKJ-YjXKFwJ5XVg0pnaVe3khNhPmM.jpg?r=826',
        link: 'https://www.netflix.com/in/title/80117498'
    },
    {
        name: "Betaal",
        seasons: "1 Seasons",
        img: 'https://occ-0-2482-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVOWaywTl6b3kb38z2DMxeqNQtbJcCYWzHD2dtepTDiMmi_evjQQCVRV2jTlJ0GSCP_0bUje-RJ4g0zqBgzSMjTZovTRb140PkBx5MDueMNdbpEi.jpg?r=db0',
        link: 'https://www.netflix.com/in/title/81061789'
    },
    {
        name: "6 Underground",
        seasons: "Movie",
        img: 'https://specials-images.forbesimg.com/imageserve/5df13e10e961e1000738da93/960x0.jpg?cropX1=227&cropX2=1383&cropY1=0&cropY2=649',
        link: 'https://www.netflix.com/in/title/81001887'
    },
    {
        name: "Project Power",
        seasons: "Movie",
        img: 'https://i.ytimg.com/vi/xw1vQgVaYNQ/maxresdefault.jpg',
        link: 'https://www.netflix.com/in/title/80204465'
    },
    {
        name: "Marvel's Daredevil",
        seasons: "3 Seasons",
        img: 'https://occ-0-2482-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABW2fI1GNxeeslsl4jEqHUb8E1z-C2J2yJjshKn0HqEgKUlGOnWeS5GYJlnJ_M0iiGH9G_V5AfBVtvzGbmzkBDOvY30F-RrPPCaYy_N98OIU60CXl.jpg?r=c0c',
        link: 'https://www.netflix.com/in/title/80018294'
    },
    {
        name: "The Old Guard",
        seasons: "Movie",
        img: 'https://static2.srcdn.com/wordpress/wp-content/uploads/2020/07/The-Old-Guard-Movie-Review.jpg',
        link: 'https://www.netflix.com/in/title/81038963'
    },
    {
        name: "Extraction",
        seasons: "Movie",
        img: 'https://i.ytimg.com/vi/L6P3nI6VnlY/maxresdefault.jpg',
        link: 'https://www.netflix.com/in/title/80230399'
    }
]
export default netflixData;