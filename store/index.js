export const strict = false

import * as Facebook from 'fb-sdk-wrapper';

export const state = () => ({
  tattooAlbums: []
})

export const mutations = {
	ADD_ALBUM (state, album) {
		console.log(album)
		state.tattooAlbums = [...state.tattooAlbums, album]
		//state.tattooAlbums.push(album)
	}
}

export const actions = {
  LOAD_ALBUMS ({ commit }) {
    Facebook.load()
      .then(() => {
        Facebook.init({
          appId: '1004744209952529',
					xfbml: true,
					version: 'v3.2'
        });

        FB.api('/inkdependenttattoos?fields=albums.limit(250){name,count,cover_photo{source},photos{source}}&access_token=EAAORzz25bxEBAHkcDucVpA06gvIZCjQlLSMPtL3Fav5ZBo0vuYDF4L33PBU6F51FTGroKZBroW3s5ChuxxsZCuZBld3ocgglTw0zZB5R7pwyaIPbNgdew4jIintIk32iLUsR4oTuFEtqIR8aBpv3rx4lArcxG9M0PMZB4ZCHwZA954QZDZD', (response) => {
						let albums = response.albums.data;
						albums.forEach(function(album) {
              if (album.id === '10161284757175582') {
								// Marcin 2019
								album.name = 'Marcin';
								album.order = 0;
								album.instagram = 'https://www.instagram.com/marcinptak_tattoo';
								commit('ADD_ALBUM', album);

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
								commit('ADD_ALBUM', album);

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
								commit('ADD_ALBUM', album);

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
								commit('ADD_ALBUM', album);

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
								commit('ADD_ALBUM', album);			
								
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
								commit('ADD_ALBUM', album);

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
								commit('ADD_ALBUM', album);

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
								commit('ADD_ALBUM', album);

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
								commit('ADD_ALBUM', album);

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
								commit('ADD_ALBUM', album);

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
								commit('ADD_ALBUM', album);

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