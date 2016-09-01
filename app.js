var app = angular.module('firstApp', ['ngAnimate']);
app.controller("ExercisesController", function($scope){
  $scope.counter = {}
  $scope.newComment= {}
  $scope.counter.tracker = 0;

$scope.counterPos = function(post){
  post.votes ++;
  }
$scope.counterNeg = function(post){
  post.votes --;
  }

$scope.addInfo = function(post, submitForm) {
  $scope.posts.push(post);
  post.votes = 0;
  $scope.info = {};
  $scope.submitForm.$setUntouched();
  $scope.post = {};
  post.postDate = moment().subtract(0, 'days').subtract(0, 'hours').calendar();
  submitForm.$setPristine();
  }
$scope.showComments = function() {
  this.allComments = !this.allComments;
  }
$scope.formFunction = function(){
  $scope.form = !$scope.form;
  }
$scope.addComments = function(){
  this.stuff = !this.stuff;
  }
$scope.addComment = function(info){
  info.comments.push ({name: $scope.newComment.name, comment: $scope.newComment.comment })
  }



  $scope.posts =
    [
      {
        title: 'Ski towns all dudes?',
        image: 'https://i.ytimg.com/vi/zMshy41lXjs/maxresdefault.jpg',
        author: 'Jackster',
        description: 'When the ski season comes around, Its always a bro tastic time.',
        votes: 1,
        postDate: moment().subtract(5, 'days').subtract(5, 'hours').calendar(),
        comments:[{ name:"mike",
                    comment:"This was a great article, very nice"


        }]

      },
      {
        title: 'Ski Bums and life',
        image: 'http://bloximages.newyork1.vip.townnews.com/jhnewsandguide.com/content/tncms/assets/v3/editorial/1/15/115e4234-8d89-59e3-808d-98c83a8eed8d/56faf5226f02a.image.jpg?resize=645%2C760',
        author: 'Scally McGree',
        description: 'The life of a ski bum can be extremely.......',
        votes: 1,
        postDate: moment().subtract(5, 'days').subtract(5, 'hours').calendar(),
        comments:[{ name:"Sara",
                    comment:"Shredddderrrs"
          }]

      },
      {
        title: 'Can we use your hot tub Bra?',
        image: 'http://m5.paperblog.com/i/24/249371/for-those-about-to-ski-bum-we-salute-you-L-kGGina.jpeg',
        author: 'Jack Daniels',
        description: 'The night we ventured into our neighbors hot tub, the events that occured after are unspeakble.',
        votes: 1,
        postDate: moment().subtract(5, 'days').subtract(5, 'hours').calendar(),
        comments:[{ name:"Jack",
                    comment:"OMG I totes wanna be a ski bum bro"
              }]
      }
    ]




})
