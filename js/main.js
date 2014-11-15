/**
 * Created with JetBrains WebStorm.
 * User: HOANGTHAU
 * Date: 11/15/14
 * Time: 1:54 PM
 * To change this template use File | Settings | File Templates.
 */
(function (){
    angular.module('AppAboutMe',['ngRoute']);
    angular.module('AppAboutMe')
        .controller('AppCtrl', AppCtrl);

    function AppCtrl($interval){
        var ame = this;
        ame.selectedLink = 0;
        ame.hideSideBar = function(){
            ame.sidebarHidden = !ame.sidebarHidden;
        };
        ame.onSelectLink= function(stt){
            ame.selectedLink = stt;
        }


    }



})();


