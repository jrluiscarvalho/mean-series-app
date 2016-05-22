
app.directive('youtube', function() {
 return {
  restrict: 'E',
  scope: {
   src: '='
  },
  templateUrl: 'views/youtube.html'
 }
});