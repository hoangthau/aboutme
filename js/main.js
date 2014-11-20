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

    function AppCtrl($interval,$timeout){
        var ame = this;
        ame.selectedLink = 0;
        var widthSpinner = 0;
        ame.widthSpinner = {
            width: widthSpinner+'%'
        };
        ame.hideSideBar = function(){
            ame.sidebarHidden = !ame.sidebarHidden;
        };
        ame.onSelectLink= function(stt){
            ame.selectedLink = stt;
        };
        ame.showSpinner = true;

        $interval(function(){
            widthSpinner++;
            if(widthSpinner <= 100){
                ame.widthSpinner = {
                    width: widthSpinner+'%'
                };
            }
        });

        $timeout(function(){
            ame.showSpinner = false;
        },2000)


    }



})();


