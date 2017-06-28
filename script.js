$(function() {
  $('#adresse').dawaautocomplete({
    params: {
      kommunekode: "101"
    },
    adgangsadresserOnly: true,
    select: function(event, autocompleteData) {
      $.get(autocompleteData.data.href, {}, function(adresseData){
	      $('#adresse-choice').text(
	      		"Ejerlav: " + adresseData.jordstykke.ejerlav.kode + ";   Matrikkelnummer: " + adresseData.jordstykke.matrikelnr
	      	);
      })
      console.log(autocompleteData)
    }
  });
});