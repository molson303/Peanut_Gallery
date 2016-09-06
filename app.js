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
  // $scope.submitForm.$setUntouched();
  $scope.post = {};
  post.postDate = moment().subtract(0, 'days').subtract(0, 'hours').calendar();
  $scope.submitForm.$setPristine();
  }
$scope.showComments = function() {
  this.allComments = !this.allComments;
  }
$scope.formFunction = function(){
  $scope.form = !$scope.form;
  }
$scope.addComments = function(){
  $scope.comments = !$scope.comments;
  }
$scope.addComment = function(info, submitComment){
  info.comments.push ({name: $scope.newComment.name, comment: $scope.newComment.comment })
  $scope.submitComment.$setUntouched();
  // $scope.post = {};
  // post.postDate = moment().subtract(0, 'days').subtract(0, 'hours').calendar();
  $scope.submitComment.$setPristine();
  }
$scope.closeModel = function(){
  $scope.form = !$scope.form
}
$scope.closeNewComment = function(){
  $scope.comments = !$scope.comments;
  this.allComments = !this.allComments;


}

  $scope.posts =
    [
      {
        title: 'Ski towns all dudes?',
        image: 'https://i.ytimg.com/vi/zMshy41lXjs/maxresdefault.jpg',
        author: 'Jackster',
        description: 'When the ski season comes around, Its always a bro tastic time.',
        votes: 0,
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
        votes: 2,
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
        votes: -2,
        postDate: moment().subtract(5, 'days').subtract(5, 'hours').calendar(),
        comments:[{ name:"Jack",
                    comment:"OMG I totes wanna be a ski bum bro"
              }]
      },
      {
        title: 'Vail Aquires Whistler in 2017',
        image: 'http://business.transworld.net/wp-content/blogs.dir/1/files/2015/08/vail-resorts-logo.jpg',
        author: 'Samantha Smith',
        description: 'Vail has aquired Whistler for 2017 and will include the resort of the Epic Pass',
        votes: 4,
        postDate: moment().subtract(5, 'days').subtract(5, 'hours').calendar(),
        comments:[{ name:"Sam",
                  comment:"@ChetBaker - booking tickets for next year NOW. Let's go!"
                },
                {name:"ChetBaker",
                comment: "@Sam- Ya Girl! Booking right now!"
              }

            ]
          }


    ]




})
