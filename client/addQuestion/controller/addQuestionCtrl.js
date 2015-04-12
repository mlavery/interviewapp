if(Meteor.isClient) {
	angular.module('interview-builder').controller("addQuestionCtrl", ['$scope', '$meteorCollection',
	    function($scope, $meteorCollection) {   
    		    
	      $scope.questions = $meteorCollection(Questions);

	      $scope.save = function(newQuestion){
	      	if(newQuestion.technology === 'Other'){
      			newQuestion.technology = newQuestion.newTechnology;
	      	} 

	      	$scope.questions.push(newQuestion);
	      	$scope.newQuestion='';
	      }

	      $scope.remove = function(question) {
	        $scope.questions.remove(question._id);
	      };
	    }
  ]);
}