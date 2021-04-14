(
    () => {

		var posicaoInicial = {
			i0: 'jogador1',
			i1: 'jogador2'
		};


		function newGame(){
			$('.square-board').each(function(){
				var square = $(this);
				var sq = square.attr('id');

				if(objSearchIndex(posicaoInicial, sq) != null){
					$(this).html('<div class="piece '+posicaoInicial[sq]+'"></div>');
				}
			});
		}

		function printBoard(){
			var cores = ['#EE82EE', '#DA70D6', '#F4A460', '#FF6347', '#00CED1', 
			'#48D1CC', '#3CB371', '#FFFF00', '#F0E68C', '#DAA520'];
			var cor = 0;
			for(var i = 100; i>=0; --i){
				if ((i <= 90 & i >= 81) | (i <= 70 & i >= 61) | (i <= 50 & i >= 41) | (i <= 30 & i >= 21) | (i <= 10 & i >= 1)){
					var sq = "i"+i;
					$('.board').append('<div class="square-right" id="'+sq+'">'+sq+'</div>');
					cor += 1;
				} else {
					var sq = "i"+i;
					$('.board').append('<div class="square-left" id="'+sq+'">'+sq+'</div>');
					cor += 1;
				}
			}
		}

		printBoard();
		newGame();

		
		function objSearch(obj, valor){
			var retorno = null;
			$.each(obj, function(i, val){
				if(val == valor){
					retorno = i;
				}
			});

			return retorno;
		}

		function objSearchIndex(obj, index){
			var retorno = null;
			$.each(obj, function(i, val){
				if(i == index){
					retorno = i;
				}
			});

			return retorno;
		}
	}
    
)()


