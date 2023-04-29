let lst1 = ["Abohar", "Adilabad", "Adityapur", "Adoni", "Agartala", "Agra", "Ahmedabad", "Ahmednagar", "Aizawl", "Ajmer", "Akola", "Alappuzha", 
            "Aligarh", "Alipurduar", "Allahabad", "Almora", "Alwar", "Ambajogai", "Ambala", "Ambikapur", "Ambur", "Amravati", "Amreli", "Amritsar", 
            "Anand", "Anantapur", "Ankleshwar", "Arakkonam", "Arambagh", "Araria", "Arrah", "Asansol", "Aurangabad", "Aurangabadbihar", "Azamgarh", 
            "Baddi", "Bagalkot", "Bagdogra", "Bahadurgarh", "Bahraich", "Balaghat", "Balangir", "Balasore", "Ballari", "Ballia", "Balrampur", 
            "Balurghat", "Banda", "Bangalore", "Bankura", "Bantwal", "Baramati", "Baran", "Bardhaman", "Bardoli", "Bareilly", "Barh", "Baripada", 
            "Barmer", "Barnala", "Barshi", "Basirhat", "Basti", "Batala", "Bathinda", "Beawar", "Beed", "Begusarai", "Bela-Pratapgarh", "Belgaum", 
            "Berhampore", "Berhampur", "Bettiah", "Betul", "Bhadohi", "Bhadrachalam", "Bhadrak", "Bhadravati", "Bhagalpur", "Bhandara", "Bharabanki", 
            "Bharatpur", "Bharuch", "Bhatkal", "Bhavnagar", "Bhawanipatna", "Bhilai", "Bhilwara", "Bhimavaram", "Bhind", "Bhiwadi", "Bhiwani", "Bhopal", 
            "Bhubaneswar", "Bhuj", "Bhusawal", "Bidar", "Biharsharif", "Bijapur", "Bijnor", "Bikaner", "Bilaspur", "Bilimora", "Biswanath-Chariali", 
            "Bodhan-Rural", "Bodinayakanur", "Boisar", "Bokaro", "Bolpur", "Bongaigaon", "Bongaon", "Budaun", "Budhwal", "Bulandshahr", "Buldana", 
            "Bundi", "Burhanpur", "Buxar", "Central-Goa", "Chaibasa", "Chakdaha", "Chalisgaon", "Chandausi", "Chandigarh", "Chandrapur", "Chennai", 
            "Chhapra", "Chhatarpur", "Chhindwara", "Chidambaram", "Chikhli", "Chikkaballapur", "Chikmagalur", "Chiplun", "Chitradurga", "Chittoor", 
            "Chittorgarh", "Churu", "Coimbatore", "Cooch-Behar", "Cuddalore", "Cuttack", "Dahanu", "Dahod", "Daltonganj", "Daman", "Darbhanga", 
            "Darjeeling", "Dasuya", "Dausa", "Davanagere"]

let lst2 = ["Dehradun", "Dehri", "Delhi", "Deoghar", "Deoria-City", "Dewas", "Dhanbad", "Dhar", "Dharamshala", "Dharapuram", "Dharmapuri", "Dharwad", 
            "Dholpur", "Dhule", "Dibrugarh", "Digboi", "Dimapur", "Dindigul", "Diu", "Doddaballapura", "Duliajan", "Dumka", "Dungarpur", "Durgapur", 
            "Eluru", "Erode", "Etah", "Etawah", "Faizabad", "Faridabad", "Faridkot", "Farrukhabad", "Fatehabad", "Fatehgarh-Sahib", "Fatehpur", 
            "Fazilka", "Firozabad", "Firozpur", "Gadag-Betigeri", "Gadwal", "Gandhidham", "Gangapur-City", "Gangarampur", "Gangtok", "Gauriganj", 
            "Gaya", "Ghazipur", "Giridih", "Godhra", "Gokak", "Golaghat", "Gonda", "Gondia", "Gopalganj", "Gorakhpur", "Gudivada", "Gudur", "Guna", 
            "Guntakal", "Guntur", "Gurdaspur", "Gurgaon", "Guwahati", "Gwalior",  "Habra", "Hajipur", "Haldia", "Haldwani", "Halol", "Hamirpur", 
            "Hampi", "Hansi", "Hanumangarh", "Hapur", "Hardoi", "Haridwar", "Hassan", "Hathras", "Haveri", "Himmatnagar", "Hisar", "Hojai", "Hoshangabad", 
            "Hoshiarpur", "Hospet", "Hosur", "Hubli", "Hyderabad", "Ichalkaranji", "Imphal", "Indore", "Itanagar", "Itarsi", "Jabalpur", "Jagdalpur", 
            "Jagraon", "Jagtial", "Jahanabad", "Jaipur", "Jalandhar", "Jalgaon", "Jalna", "Jalpaiguri", "Jammu", "Jamnagar", "Jamshedpur", "Jamui", 
            "Jangipur", "Jaunpur", "Jhalawar", "Jhansi", "Jhargram", "Jharsuguda", "Jhunjhunu", "Jind", "Jjajjar", "Jodhpur", "Jorhat", "Junagadh", 
            "Kadapa", "Kadayanallur", "Kadiri", "Kaithal", "Kakinada", "Kalaburagi", "Kamareddy", "Kanchrapara", "Kannauj", "Kannur", "Kanpur", "Kanyakumari", 
            "Kapurthala", "Karad", "Karaikal", "Karaikkudi", "Karimnagar", "Karnal", "Karur", "Karwar", "Kashipur", "Katihar", "Katni", "Kavali", "Kayamkulam", 
            "Kendrapada", "Kendujhar", "Khagaria", "Khalilabad", "Khamgaon", "Khammam", "Khandwa"]

let lst3 = ["Khanna", "Kharagpur", "Kishanganj", "Kishangarh", "Kochi", "Kodaikanal", "Kohima", "Kokrajhar", "Kolar", "Kolhapur", "Kolkata", "Kollam", "Koppal",
            "Korba", "Kota", "Kotdwar", "Kothagudem", "Kottarakkara", "Kottayam", "Kovilpatti", "Kozhikode", "Krishnagiri", "Krishnanagar", "Kullu", "Kumbakonam", 
            "Kurnool", "Kurukshetra", "Kushalnagar", "Lakhimpur", "Lalitpur", "Latur", "Lonavla", "Lpu-Phagwara", "Lucknow", "Ludhiana", "Machilipatnam", "Madanapalle", 
            "Madhubani", "Madikeri", "Madurai", "Mahbubnagar", "Mahoba", "Mainpuri", "Malappuram", "Malda", "Malegaon", "Malout", "Manali", "Mancherial", "Mandapeta", 
            "Mandi-Dabwali", "Mandi-Gobindgarh", "Mandsaur", "Mandya", "Mangaluru", "Manipal", "Mansa", "Markapur", "Mathura", "Maunath-Bhanjan", "Mayiladuthurai", 
            "Medinipur", "Meerut", "Mehsana", "Mettupalayam", "Miryalaguda", "Mirzapur", "Modinagar", "Moga", "Moradabad", "Morbi", "Morena", "Motihari", 
            "Mount-Abu", "Mughalsarai", "Mukerian", "Muktsar", "Mumbai", "Munger", "Mussoorie", "Muzaffarnagar", "Muzaffarpur", "Mysore", "Nabadwip", "Nabha", 
            "Nadiad", "Nagaon", "Nagapattinam", "Nagda", "Nagercoil", "Nagpur", "Naharlagun", "Nainital", "Nakodar", "Nalbari", "Nalgonda", "Namakkal", "Nanded", 
            "Nandurbar", "Nandyal", "Nangal", "Naraingarh", "Narasaraopet", "Narnaul", "Narsinghpur", "Nashik", "Navsari", "Neemuch", "Nellore", "Neyveli", "Nirmal", 
            "Nizamabad", "Noida", "Noida-1", "North-Lakhimpur", "Ongole", "Ooty", "Orai", "Osmanabad", "Palakkad", "Palakollu", "Palampur", "Palani", "Palanpur", 
            "Palghar", "Pali", "Palwal", "Panipat", "Paradeep", "Paramakudi", "Parbhani", "Parvathipuram", "Pathankot", "Patiala", "Patna", "Pattukkottai", "Perambalur", 
            "Phagwara", "Piler", "Pilibhit", "Pilkhuwa", "Pinjore-City", "Pondicherry", "Porbandar", "Port-Blair", "Pratapgarh", "Proddatur", "Pudukkottai", "Pune", 
            "Puri", "Purnea"]

let lst4 = ["Purulia", "Pusad", "Puttur", "Rae-Bareli", "Raghunathpur", "Raichur", "Raiganj", "Raigarh", "Raipur", "Rajahmundry", "Rajampet", "Rajapalayam", "Rajgarh", 
            "Rajkot", "Rajnandgaon", "Rajsamand", "Ramagundam", "Ramanagara", "Ramanathapuram", "Ramgarh", "Rampur", "Ranaghat-Wb", "Ranchi", "Rangia", "Rangpo", 
            "Ranibennur", "Raniganj", "Ratlam", "Ratnagiri", "Ravulapalem", "Rayachoty", "Rayagada", "Rewa", "Rewari", "Rishikesh", "Roha", "Rohtak", "Roorkee", 
            "Ropar", "Rourkela", "Rudrapur", "Sagar", "Saharanpur", "Saharsa", "Salem", "Samastipur", "Sambalpur", "Sangamner", "Sangli", "Sangrur", "Sankarankoil", 
            "Santipur", "Sasaram", "Satara", "Satna", "Sawai-Madhopur", "Sehore", "Shahjahanpur", "Shamli", "Shikohabad", "Shillong", "Shimla", "Shirdi-City", 
            "Shivamogga", "Shivpuri", "Siddipet", "Sikar", "Silchar", "Siliguri", "Silvassa", "Sindhanur", "Singrauli", "Sirkali", "Sirsa", "Sirsi", "Sitamarhi", 
            "Sitapur", "Sivakasi", "Sivasagar", "Siwan", "Solan", "Solapur", "Sonipat", "Sri-Ganganagar", "Srikakulam", "Srinagar", "Srivilliputhur", "Sullurpeta", 
            "Sultanpur", "Sulthan-Bathery", "Surat", "Suratgarh", "Surendranagar-Dudhrej", "Suri", "Suryapet", "Tadepalligudem", "Tadpatri", "Tanuku", "Tarn-Taran-Sahib", 
            "Tenkasi", "Tezpur", "Thanjavur", "Theni", "Thiruvalla", "Thiruvallur", "Thiruvananthapuram", "Thiruvarur", "Thodupuzha", "Thoothukudi", "Thrissur", 
            "Tindivanam", "Tinsukia", "Tiptur", "Tirunelveli", "Tirupati", "Tirupattur", "Tirupur", "Tiruttani", "Tiruvannamalai", "Tohana", "Trichy", "Tumakuru", 
            "Tuni", "Udaipur", "Udgir", "Udumalaipettai", "Ujjain", "Uluberia", "Una", "Unnao", "Vadodara", "Valsad", "Vapi", "Varanasi", "Vellore", "Veraval", 
            "Vidisha", "Vijayawada", "Viluppuram", "Virudhunagar", "Vizag", "Vizianagaram", "Vyara", "Waidhan", "Warangal", "Wardha", "Washim", "Wayanad", "Yamuna-Nagar", 
            "Yavatmal"]


let city_list = document.getElementById("city-lst")

function addCities(arr){
    let div = document.createElement("div")
    arr.forEach((ele) => {
        let a = document.createElement("a")
        a.innerText = ele
        div.appendChild(a)
    })
    city_list.appendChild(div)
}
addCities(lst1)

function addCities(arr){
    let div = document.createElement("div")
    arr.forEach((ele) => {
        let a = document.createElement("a")
        a.innerText = ele
        div.appendChild(a)
    })
    city_list.appendChild(div)
}
addCities(lst2)

function addCities(arr){
    let div = document.createElement("div")
    arr.forEach((ele) => {
        let a = document.createElement("a")
        a.innerText = ele
        div.appendChild(a)
    })
    city_list.appendChild(div)
}
addCities(lst3)

function addCities(arr){
    let div = document.createElement("div")
    arr.forEach((ele) => {
        let a = document.createElement("a")
        a.innerText = ele
        div.appendChild(a)
    })
    city_list.appendChild(div)
}
addCities(lst4)

let a = document.querySelectorAll("#city-lst a")
a.forEach((ele) => {
    ele.href = "#"
}) 

