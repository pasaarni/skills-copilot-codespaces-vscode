// About: This file contains the implementation of the member functionalities
// for the application. It includes methods for creating, updating, and 
// managing member data.

function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'modules/skills/views/member.html',
    controller: 'SkillsMemberController',
    controllerAs: 'vm',
    bindToController: true,
    scope: {
      member: '='
    }
  };
}