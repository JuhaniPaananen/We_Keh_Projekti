# Määrittely ja suunnittelu

## Idea

Tarkoituksena olisi tehdä taski systeemi projekteille tai kurssien seurantaan, jotta niiden seuraaminen olisi helpompaa.

## Käyttäjäpersoonat

#### Janne, 35, projektipäällikkö, Helsinki: 
![Käyttäjä1](https://github.com/user-attachments/assets/73caac04-1b05-4f89-8743-7142345b9a6c)

#### Sari, 28, freelancer, Tampere: 
![Käyttäjä2](https://github.com/user-attachments/assets/17465d56-069c-4a23-b717-9b45c77fc9de)

#### Onni, 22, opiskelija, Kokkola: 
![Käyttäjä3](https://github.com/user-attachments/assets/c22d4255-8fa8-4fb4-87a6-1c863050bb76)

## Käyttötarkoitus ja käyttötilanteet

Eli Käyttäjä voi luoda taskin, joka koostuu taskin nimestä, tiedosta, aikamääreestä ja sen vaiheesta.
Aikamääteeseen tulee, milloin jokin taski on aloitettu ja siihen tullaan lisäämään milloin taski on valmis.
Eli, jos jotain on aloitettu tällöin, mutta se ei ole vielä valmis: "20.3.2025 - ".
Ja jos kun sama taski on saanut valmiiksi niin: "20.3.2025 - 21.3.2025".
Vaiheille on kolme eri listaa: "Valmis" vihreällä, "Kesken" keltaisella ja "ei aloitettu" punaisella.
Nappeja on kaksi jokaisella taskilla: Siirry eli siirtää taskia eteenpäin toiselle listalle ja lopuksi kun tietty taskin on valmis niin poisto nappula on siirtymisen sijaan, joka siis poistaa sen. Tiedot nappulasta pääsee tietoihin.

## Käyttöliittymän prototyyppi

Käyttöliittymä ei lopullinen, mutta tarpeeksi kuvaava. Kaikki asiat löytyvät kuvasta, mitä lopullisestikin.
Tärkeimpänä tässä on huomata layout eli järjestys kaikelle. Layout on vielä pieni, että sen voisi venytää aivan kokosivulle tai jättää tilaa muille ominaisuuksille, joita voi lisätä jatkossa. Värikkyys tulee pysymään, mutta yritän sen olevan simppelimpi ja ehkä jopa muokattavissa, jos on aikaa.

![image](https://github.com/user-attachments/assets/1c3fe091-609b-4a5c-9c60-5e1158dc2c8d)

## Tekninen toteutus

Aikalailla samalla tavalla kuin, kun nuo tehtävätkin tullut tehtyä samalla tavalla, jossa olisi:
#### Ympäristö: Azure/Paikallinen kone
#### Frontend: Reach
#### Backend: Node.js
#### Tietokanta: PostgreSQL

Ongelmana on, että Azure ympäristössä tuo työharjoittelu lisenssi painaa päälle korvaten student lisenssin, että se ei välttämättä toimi niin kuin halusi.
Eli jos tuo ei toimi niin silloin siirryn paikalliskoneelle. Frontend ja backend varmasti pysyvät omillaan, mutta PostgreSQL voi muuttua SQLiteen, jos kaikki ei mene niin kuin pitää.

## Projektinhallinta

#### Projekti etenee seuraavissa tavoitteissa ja alustavissa päivämäärissä:
- 28.3.2025 Backend luonti (Toiminnallisuudet kuntoon.)
- 7.4.2025 Frontend luonti (Sivusto kuntoon.)
- 11.4.2025 Kokonaisuuden katsomista ja mahdollisten virheiden korjaamista.
- 19.4.2025 Projektin liittäminen Azure ympäristöön.

En osaa vielä päivämääristä sanoa, sillä tämä riippuu hommien määrästä, joiden kiintiö voi räjähtää ja en saa tehtyä samalla tahdilla toista vaihetta.
Tämä on taas, että kuinka vaikeita asioita pitää tehdä vaikuttaa myös tekemiseen. Mutta lopullinen aika on tavoitteellisesti on 19.4, jolloin applikaatio on Azure Ympäristössä tai aikaisemmin paikallisella koneella. Parhaani kuitenkin yritän.

#### Seuranta:

Projektia voi seurata tästä reposta, johon aina pusken, mitä olen tehnyt.

## Käyttäjätestaus

Käyttäjille luodaan ohjelma, jonka tarkoituksena on, että he luovat taskeja itselleen ja seuraavat heidän omaa edistymistään applikaation kautta.
Jokaisen vaiheen kohdalla tulee käyttäjien tehdä oma tarkistus, että vaiheen kohta on toteutunut. Jos ei niin siitä raportoidaan vastaamalla valmiisiin kysymyksiin.

### Virheen raportointi
- Mikä vaihe oli menossa?
- Mikä meni pieleen?
- Minkä takia mielestäni kävi näin?
- Muuta huomautettavaa?

### Testaus vaihe 1

Käyttäjät luovat minimissään 3 taskia, jotka poikkeavat toisistaan ainakin ajallisesti.

### Testaus vaihe 2

Käyttäjät siirtävät taskeja vaiheissa eteenpäin, kun sen aika on ja katsovat, että muutokset ovat pysyviä.

### Testaus vaihe 3

Käyttäjät ovat saaneet taskit tehtyä ja näkyvät vaiheessa "Valmis". Lopuksi käyttääjä poistaa taskin kokonaan, jolloin se pysyy poissa.
