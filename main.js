angular.module('KRRclass', [ 'chart.js']).controller('MainCtrl', ['$scope','$http', mainCtrl]);

document.body.addEventListener( 'load', startMyAwesomeApp, false );
function mainCtrl($scope, $http){
	$scope.startMyAwesomeApp = function(){
		var name = "";
		$scope.myDisplayMessage = ("Choose from a list of All-Stars");
		$scope.MagicJohnson = function(){
			$scope.mySparqlQuery = encodeURI( "	PREFIX dbr: <http://dbpedia.org/resource/> PREFIX  dbp:  <http://dbpedia.org/property/>  Prefix dbc: <http://dbpedia.org/resource/Category:> prefix dct: <http://purl.org/dc/terms/>  SELECT DISTINCT  ?player ?points ?assists ?rebounds where { ?player  dct:subject  dbc:National_Basketball_Association_All-Stars .  ?player dbp:stat1value ?points .?player dbp:stat2value ?rebounds. ?player dbp:stat3value ?assists.  filter((?player) = dbr:Magic_Johnson)	} ").replace(/#/, '%23');
			name = "Magic Johnson";
		}
		$scope.LarryBird = function(){
			$scope.mySparqlQuery = encodeURI( "	PREFIX dbr: <http://dbpedia.org/resource/> PREFIX  dbp:  <http://dbpedia.org/property/>  Prefix dbc: <http://dbpedia.org/resource/Category:> prefix dct: <http://purl.org/dc/terms/>  SELECT DISTINCT  ?player ?points ?assists ?rebounds where { ?player  dct:subject  dbc:National_Basketball_Association_All-Stars .  ?player dbp:stat1value ?points .?player dbp:stat2value ?rebounds. ?player dbp:stat3value ?assists.  filter((?player) = dbr:Larry_Bird)	} ").replace(/#/, '%23');
			name = "Larry Bird";
		}
		$scope.AntonioDavis = function(){
			$scope.mySparqlQuery = encodeURI( "	PREFIX dbr: <http://dbpedia.org/resource/> PREFIX  dbp:  <http://dbpedia.org/property/>  Prefix dbc: <http://dbpedia.org/resource/Category:> prefix dct: <http://purl.org/dc/terms/>  SELECT DISTINCT  ?player ?points ?assists ?rebounds where { ?player  dct:subject  dbc:National_Basketball_Association_All-Stars .  ?player dbp:stat1value ?points .?player dbp:stat2value ?rebounds. ?player dbp:stat3value ?assists.  filter((?player) = dbr:Antonio_Davis)	} ").replace(/#/, '%23');
			name = "Anthony Davis";
		}
		$scope.ReggieMiller = function(){
			$scope.mySparqlQuery = encodeURI( "	PREFIX dbr: <http://dbpedia.org/resource/> PREFIX  dbp:  <http://dbpedia.org/property/>  Prefix dbc: <http://dbpedia.org/resource/Category:> prefix dct: <http://purl.org/dc/terms/>  SELECT DISTINCT  ?player ?points ?assists ?rebounds where { ?player  dct:subject  dbc:National_Basketball_Association_All-Stars .  ?player dbp:stat1value ?points .?player dbp:stat2value ?rebounds. ?player dbp:stat3value ?assists.  filter((?player) = dbr:Reggie_Miller)	} ").replace(/#/, '%23');
			name = "Reggie Miller";
		}
		$scope.ReggieMiller = function(){
			$scope.mySparqlQuery = encodeURI( "	PREFIX dbr: <http://dbpedia.org/resource/> PREFIX  dbp:  <http://dbpedia.org/property/>  Prefix dbc: <http://dbpedia.org/resource/Category:> prefix dct: <http://purl.org/dc/terms/>  SELECT DISTINCT  ?player ?points ?assists ?rebounds where { ?player  dct:subject  dbc:National_Basketball_Association_All-Stars .  ?player dbp:stat1value ?points .?player dbp:stat2value ?rebounds. ?player dbp:stat3value ?assists.  filter((?player) = dbr:Reggie_Miller)	} ").replace(/#/, '%23');
			name = "Reggie Miller";
		}
		$scope.Hakeem = function(){
			$scope.mySparqlQuery = encodeURI( "	PREFIX dbr: <http://dbpedia.org/resource/> PREFIX  dbp:  <http://dbpedia.org/property/>  Prefix dbc: <http://dbpedia.org/resource/Category:> prefix dct: <http://purl.org/dc/terms/>  SELECT DISTINCT  ?player ?points ?assists ?rebounds where { ?player  dct:subject  dbc:National_Basketball_Association_All-Stars .  ?player dbp:stat1value ?points .?player dbp:stat2value ?rebounds. ?player dbp:stat3value ?assists.  filter((?player) = dbr:Hakeem_Olajuwon)	} ").replace(/#/, '%23');
			name = "Hakeem Olajuwon";
		}
		$scope.SteveNash = function(){
			$scope.mySparqlQuery = encodeURI( "	PREFIX dbr: <http://dbpedia.org/resource/> PREFIX  dbp:  <http://dbpedia.org/property/>  Prefix dbc: <http://dbpedia.org/resource/Category:> prefix dct: <http://purl.org/dc/terms/>  SELECT DISTINCT  ?player ?points ?assists ?rebounds where { ?player  dct:subject  dbc:National_Basketball_Association_All-Stars .  ?player dbp:stat1value ?points .?player dbp:stat2value ?rebounds. ?player dbp:stat3value ?assists.  filter((?player) = dbr:Steve_Nash)	} ").replace(/#/, '%23');
			name = "Steve Nash";
		}
		$scope.mySparqlEndpoint = "http://dbpedia.org/sparql" ;
		$scope.mySparqlQuery = "empty query"
		// $scope.MagicJohnson1 = function(){
		// 	$scope.mySparqlQuery = encodeURI( "	PREFIX dbr: <http://dbpedia.org/resource/> PREFIX  dbp:  <http://dbpedia.org/property/>  Prefix dbc: <http://dbpedia.org/resource/Category:> prefix dct: <http://purl.org/dc/terms/>  SELECT DISTINCT  ?player ?points ?assists ?rebounds where { ?player  dct:subject  dbc:National_Basketball_Association_All-Stars .  ?player dbp:stat1value ?points .?player dbp:stat2value ?rebounds. ?player dbp:stat3value ?assists.  filter((?player) = dbr:Magic_Johnson)	} ").replace(/#/, '%23');
		// }
		// $scope.LarryBird1 = function(){
		// 	$scope.mySparqlQuery = encodeURI( "	PREFIX dbr: <http://dbpedia.org/resource/> PREFIX  dbp:  <http://dbpedia.org/property/>  Prefix dbc: <http://dbpedia.org/resource/Category:> prefix dct: <http://purl.org/dc/terms/>  SELECT DISTINCT  ?player ?points ?assists ?rebounds where { ?player  dct:subject  dbc:National_Basketball_Association_All-Stars .  ?player dbp:stat1value ?points .?player dbp:stat2value ?rebounds. ?player dbp:stat3value ?assists.  filter((?player) = dbr:Larry_Bird)	} ").replace(/#/, '%23');
		// }
		// $scope.AntonioDavis1 = function(){
		// 	$scope.mySparqlQuery = encodeURI( "	PREFIX dbr: <http://dbpedia.org/resource/> PREFIX  dbp:  <http://dbpedia.org/property/>  Prefix dbc: <http://dbpedia.org/resource/Category:> prefix dct: <http://purl.org/dc/terms/>  SELECT DISTINCT  ?player ?points ?assists ?rebounds where { ?player  dct:subject  dbc:National_Basketball_Association_All-Stars .  ?player dbp:stat1value ?points .?player dbp:stat2value ?rebounds. ?player dbp:stat3value ?assists.  filter((?player) = dbr:Antonio_Davis)	} ").replace(/#/, '%23');
		// }
		// $scope.ReggieMiller1 = function(){
		// 	$scope.mySparqlQuery = encodeURI( "	PREFIX dbr: <http://dbpedia.org/resource/> PREFIX  dbp:  <http://dbpedia.org/property/>  Prefix dbc: <http://dbpedia.org/resource/Category:> prefix dct: <http://purl.org/dc/terms/>  SELECT DISTINCT  ?player ?points ?assists ?rebounds where { ?player  dct:subject  dbc:National_Basketball_Association_All-Stars .  ?player dbp:stat1value ?points .?player dbp:stat2value ?rebounds. ?player dbp:stat3value ?assists.  filter((?player) = dbr:Reggie_Miller)	} ").replace(/#/, '%23');
		// }

		$scope.startQuery = function(){
			$scope.myDisplayMessage = ("These are " + name + "'s statistics");
			$http( { 
				method: "GET",
				url : $scope.mySparqlEndpoint + "?query=" + $scope.mySparqlQuery,
				headers : {'Accept':'application/sparql-results+json', 'Content-Type':'application/sparql-results+json'}
			} )
			.success(function(data, status ) {
				$scope.myDynamicLabels = [];
				$scope.myDynamicData = [];
				$scope.myDynamicAssists = [];
				$scope.myDyanmicRebounds = [];
				$scope.myDynamicPoints = [];
				$scope.myDynamicSeries = ["Points","Assits","Rebounds"];
				// $scope.myDynamicSeries = [];
	
				// now iterate on the results
				angular.forEach(data.results.bindings, function(val) {
					$scope.myDynamicLabels.push(val.player.value);
					$scope.myDynamicPoints.push(val.points.value);
					$scope.myDynamicAssists.push(val.assists.value);
					$scope.myDyanmicRebounds.push(val.rebounds.value);
					// angular.forEach(data.results.bindings, function(val) {
					// 	myDynamicDataII = [];
					// 	myDynamicDataII.push(val.points.value,val.rebounds.value,val.assists.value);
					// 	$scope.scope.myDynamicData.push(myDynamicDataII)
					// });
					
				});
				$scope.myDynamicData = [$scope.myDynamicPoints,$scope.myDynamicAssists,$scope.myDyanmicRebounds];

			})
			.error(function(error ){
				console.log('Error running the input query!'+error);
			});

			

		}
		

	};


	
		

	}




