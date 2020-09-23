import * as Facebook from 'fb-sdk-wrapper';

export const state = () => ({
  tattooAlbums: []
})

export const actions = {
  LOAD_ALBUMS ({ commit }) {
    Facebook.load()
      .then(() => {
        Facebook.init({
          appId: '1004744209952529',
					xfbml: true,
					version: 'v3.2'
        });

        const tattooAlbums = []

        console.log(FB)

        FB.api('/inkdependenttattoos?fields=albums.limit(250){name,count,cover_photo{source},photos{source}}&access_token=EAAe39aH7hokBAIZAaXIjr6yIvAZBZBvnZBi6vJvrRjsyh3knyfKH1E7zkmnYrWB45G3OaqK5MbqRHngfTKu25JKChaJP8uEwDXAC6SO7CjS6PZB9yRPh95lGqvXQy1ZCRsW5Aks7qF7l1WDaciQn8ZAXjZCvsdCumdWM6koVtKYMHgZDZD', (response) => {
						let albums = response.albums.data;
						albums.forEach(function(album) {
              if (album.id === '10161284757175582') {
								// Marcin 2019
								album.name = 'Marcin';
								album.order = 0;
								album.instagram = 'https://www.instagram.com/marcinptak_tattoo';
								tattooAlbums.push(album);

								const getAllPhotos = async function() {
									let nextPage = album.photos.paging.next;

									while(album.photos.data.length < album.count){
										const response = await fetch(nextPage);
										const json = await response.json();
										album.photos.data = album.photos.data.concat(json.data);
										nextPage = json.paging.next;
									}
								}

								getAllPhotos();
							}

							if (album.id === '10160033361505582') {
								// Marek 2018
								album.name = 'Marek';
								album.instagram = 'https://www.instagram.com/marekskalny_art';
								album.order = 1;
								tattooAlbums.push(album);

								const getAllPhotos = async function(){
									let nextPage = album.photos.paging.next;

									while(album.photos.data.length < album.count){
										const response = await fetch(nextPage);
										const json = await response.json();
										album.photos.data = album.photos.data.concat(json.data);
										nextPage = json.paging.next;
									}
								}

								getAllPhotos();
							}

							if (album.id === '10160398834995582'){
								// Marek Oil Paintings
								album.name = 'Marek Paintings';
								album.instagram = 'https://www.instagram.com/marekskalny_art';
								album.order = 2;
								tattooAlbums.push(album);

								const getAllPhotos = async function(){
									let nextPage = album.photos.paging.next;

									while(album.photos.data.length < album.count){
										const response = await fetch(nextPage);
										const json = await response.json();
										album.photos.data = album.photos.data.concat(json.data);
										nextPage = json.paging.next;
									}
								}

								getAllPhotos();
							}

							if (album.id === '10153556071625582') {
								// Daniel

								album.instagram = 'https://www.instagram.com/danielbacz';
								album.order = 2;
								tattooAlbums.push(album);

								const getAllPhotos = async function(){
									let nextPage = album.photos.paging.next;

									while(album.photos.data.length < album.count){
										const response = await fetch(nextPage);
										const json = await response.json();
										album.photos.data = album.photos.data.concat(json.data);
										nextPage = json.paging.next;
									}
								}

								getAllPhotos();
							}

							if (album.id === '10156539880325582') {
								// Wojtek
								album.instagram = 'https://www.instagram.com/alternative_bodyart_by_wojtek';
								album.order = 3;
								tattooAlbums.push(album);			
								
								const getAllPhotos = async function(){
									let nextPage = album.photos.paging.next;

									while(album.photos.data.length < album.count){
										const response = await fetch(nextPage);
										const json = await response.json();
										album.photos.data = album.photos.data.concat(json.data);
										nextPage = json.paging.next;
									}
								}

								getAllPhotos();
							}

							if (album.id === '10159146265255582') {
								// Gzy

								album.name = 'Gzy Ex Silesia';
								album.instagram = 'https://www.instagram.com/gzyexsilesia';
								album.order = 4;
								tattooAlbums.push(album);

								const getAllPhotos = async function(){
									let nextPage = album.photos.paging.next;

									while(album.photos.data.length < album.count){
										const response = await fetch(nextPage);
										const json = await response.json();
										album.photos.data = album.photos.data.concat(json.data);
										nextPage = json.paging.next;
									}
								}

								getAllPhotos();
							}

							if (album.id === '10160843000760582') {
								// Karol

								album.name = 'Karol';
								album.instagram = 'https://www.instagram.com/charlie__lame';
								album.order = 5;
								tattooAlbums.push(album);

								const getAllPhotos = async function(){
									let nextPage = album.photos.paging.next;

									while(album.photos.data.length < album.count){
										const response = await fetch(nextPage);
										const json = await response.json();
										album.photos.data = album.photos.data.concat(json.data);
										nextPage = json.paging.next;
									}
								}

								getAllPhotos();
							}

							if (album.id === '10158809026710582') {
								// Aga

								album.name = 'Aga';
								album.instagram = 'https://www.instagram.com/pelikan.baba/';
								album.order = 5;
								tattooAlbums.push(album);

								const getAllPhotos = async function(){
									let nextPage = album.photos.paging.next;

									while(album.photos.data.length < album.count){
										const response = await fetch(nextPage);
										const json = await response.json();
										album.photos.data = album.photos.data.concat(json.data);
										nextPage = json.paging.next;
									}
								}

								getAllPhotos();
							}

							if (album.id === '10160543615490582') {
								// Sofia

								album.name = 'Sofia';
								album.instagram = 'https://www.instagram.com/pochiehuntie';
								album.order = 6;
								tattooAlbums.push(album);

								const getAllPhotos = async function(){
									let nextPage = album.photos.paging.next;

									while(album.photos.data.length < album.count){
										const response = await fetch(nextPage);
										const json = await response.json();
										album.photos.data = album.photos.data.concat(json.data);
										nextPage = json.paging.next;
									}
								}

								getAllPhotos();
							}

							if (album.id === '10158468256865582') {
								// Ash

								album.name = 'Ash';
								album.instagram = 'https://www.instagram.com/achristieart';
								album.order = 7;
								tattooAlbums.push(album);

								const getAllPhotos = async function(){
									let nextPage = album.photos.paging.next;

									while(album.photos.data.length < album.count){
										const response = await fetch(nextPage);
										const json = await response.json();
										album.photos.data = album.photos.data.concat(json.data);
										nextPage = json.paging.next;
									}
								}

								getAllPhotos();
							}

							if (album.id === '10156569798145582') {
								// Scarification and piercing

								album.name = 'Scarification and piercing';
								album.instagram = 'https://www.instagram.com/alternative_bodyart_by_wojtek/';
								album.order = 8;
								tattooAlbums.push(album);

								const getAllPhotos = async function(){
									let nextPage = album.photos.paging.next;

									while(album.photos.data.length < album.count){
										const response = await fetch(nextPage);
										const json = await response.json();
										album.photos.data = album.photos.data.concat(json.data);
										nextPage = json.paging.next;
									}
								}

								getAllPhotos();
              }
            })
          })
      });
  }
}

export const getters = {
  tattooAlbums: state => state.tattooAlbums
}