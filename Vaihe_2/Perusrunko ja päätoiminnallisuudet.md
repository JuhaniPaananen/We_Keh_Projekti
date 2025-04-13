# Tiivistelmä
Projekti on Taskien hallinta applikaatiosta, joka on tehty Reach, Node.js ja Sqlite3. Sain myös näkymään sen Azure ympäristössä Static Web Appina. Kaikissa osissa on oma raportinsa, jossa kerron toteutuksesta.

Jatko kehityksiä voisi olla, että se toimisi Azuressa. Azureen sain sivun näkyviin, mutta se ei tallenna mitään. En tiedä, mutta ei riittänyt aika, joten tähän se jäi.

# Mistä löydän projektin?
Se on master branchissa samassa repossa.


# Backend: Node.js

#### Raportti:
Backend koostuu perustoiminnallisuuksista, jotka ovat myös lopullisessa versiossa. 
Tarkoituksena ei ollut tehdä virallista versiota tästä vaan, että toiminnallisuuksilla voisi lähennä testata, että kaikki toimii.
Tehtävät ovat listataan yhteen listaan, jossa tehtävän laatikon väri vastaa tehtävän vaihetta.
Kaikissa tehtävissä on nappulat, joista voidaan tehdä seuraavat:
- Siirtää vaiheissa eteenpäin.
- Katsoa taskin kaikki tiedot.

Myöskin voi hakea nimellä, joka ryhmittää näkyviin ne, joiden nimi vastaa etsittyä kohdetta.

![image](https://github.com/user-attachments/assets/11d158f5-b808-4a00-900c-1617f2a33336)

# Frontend: Reach

#### Raportti:
Frontend tehty Reachillä. Vastaa täydellisesti alkuperäistä suunnitelmaa eli kolme listaa, jotka edustavat kolmea eri vaihetta: 'Ei aloitettu', 'Kesken' ja 'Valmis'. Tämä ei niinkään kehittynyt siitä, mitä suunnittelmin. Olisin käyttänyt sitä, mitä minulla on vaiheessa 1, mutta kadotin sen html koodin.

Kuvan mukaisesti voit tehdä taskin, mutta vain antamalla sille nimi ja tiedot. Sen jälkeen voit luoda taskin painamalla nappia.
Taskit kiertävät siis vaihe listoja. Taskia voidaan laittaa eteenpäin listassa painammalla 'Siirry'

![image](https://github.com/user-attachments/assets/c4243373-9e87-4ebc-b7c4-3dee33615f1b)

# Ympäristö: Azure Static Web App

#### Raportti:
Noin 55 workflow runin jälkeen ja aivan viimeisillä tunneilla ennen palautusta sain sen toimimaan Azure ympäristöstä. En tehty vscode:n kautta sitä Appia vaan tein sen tuolta Azure Portaalista, koska jokin vika esti sen. Luonnin aikana asetin sille, että mistä löytyy kaikki eli app = frontend, api = backend ja kaikki muu oli sitten automatisoitua. No lauantaina yritin jo tätä laittaa, mutta jokin siinä nyt oli. Hirveä vänkääminen tämän kanssa ja pari kertaa rikoin kaiken, kun aivan meni hermoille tämä. Jos lopputuntumaa pitää kuvailla niin se onnistui ohittamalla kaikki, mitkä ei toiminut workflow tiedostoa muuttamalla. Muuten aivan sanaton, että kuinka vaikea tämä oli.

![image](https://github.com/user-attachments/assets/b19e48fc-76bf-472b-a176-09f08e3f486e)
![image](https://github.com/user-attachments/assets/1c7d6822-a6fd-431e-aba1-af5aaaf1c201)


# Tietokanta: Sqlite3




