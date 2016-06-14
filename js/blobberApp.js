angular.module('app', []).constant('payload', {
            "blobRequest": [
                {
                    "paramId": "GP-ACTION-CD",
                    "precisionLength": 1,
                    "storedValue": ""
                },
                {
                    "paramId": "CNTRBN-LEVL-CD",
                    "precisionLength": 1,
                    "storedValue": ""
                },
                {
                    "paramId": "CNTRBN-LEVL-CD-M",
                    "precisionLength": 1,
                    "storedValue": ""
                },
                {
                    "paramId": "RSK-TOL-LEVL-CD",
                    "precisionLength": 1,
                    "storedValue": ""
                },
                {
                    "paramId": "RSK-TOL-LEVL-CD-M",
                    "precisionLength": 1,
                    "storedValue": ""
                },{
                    "paramId": "BEGIN-COMPN-CD",
                    "precisionLength": 1,
                    "storedValue": ""
                },{
                    "paramId": "BEGIN-COMPN-CD-M",
                    "precisionLength": 1,
                    "storedValue": ""
                },{
                    "paramId": "RTRMT-AGE-CD",
                    "precisionLength": 1,
                    "storedValue": ""
                },{
                    "paramId": "RTRMT-AGE-CD-M",
                    "precisionLength": 1,
                    "storedValue": ""
                },{
                    "paramId": "DB-PLN-EXSTS-CD",
                    "precisionLength": 1,
                    "storedValue": ""
                },
                {
                    "paramId": "DB-PLN-EXSTS-CD-M",
                    "precisionLength": 1,
                    "storedValue": ""
                },
                {
                    "paramId": "FILLER",
                    "precisionLength": 20,
                    "storedValue": ""
                },{
                    "paramId": "COMPETITOR-TXT",
                    "precisionLength": 100,
                    "storedValue": ""
                },{
                    "paramId": "COMPETITOR-TXT-M",
                    "precisionLength": 1,
                    "storedValue": ""
                },{
                    "paramId": "GP-FOR-CMPR-1-CD",
                    "precisionLength": 4,
                    "storedValue": ""
                },{
                    "paramId": "GP-FOR-CMPR-1-CD-M",
                    "precisionLength": 1,
                    "storedValue": ""
                },{
                    "paramId": "GP-FOR-CMPR-2-CD",
                    "precisionLength": 4,
                    "storedValue": ""
                },{
                    "paramId": "GP-FOR-CMPR-2-CD-M",
                    "precisionLength": 1,
                    "storedValue": ""
                },{
                    "paramId": "CERTNTY-EQVLNT-PC-NEG-FL",
                    "precisionLength": 1,
                    "storedValue": ""
                },{
                    "paramId": "CERTNTY-EQVLNT-PC",
                    "precisionLength": 6,
                    "storedValue": ""
                },{
                    "paramId": "CERTNTY-EQVLNT-PC-M",
                    "precisionLength": 1,
                    "storedValue": ""
                },{
                    "paramId": "IMPLICIT-CST-PC-NEG-FL",
                    "precisionLength": 1,
                    "storedValue": ""
                },{
                    "paramId": "IMPLICIT-CST-PC",
                    "precisionLength": 6,
                    "storedValue": ""
                },{
                    "paramId": "IMPLICIT-CST-PC-M",
                    "precisionLength": 1,
                    "storedValue": ""
                },{
                    "paramId": "ACTV-MGMT-PC-NEG-FL",
                    "precisionLength": 1,
                    "storedValue": ""
                },{
                    "paramId": "ACTV-MGMT-PC",
                    "precisionLength": 6,
                    "storedValue": ""
                },{
                    "paramId": "ACTV-MGMT-PC-M",
                    "precisionLength": 1,
                    "storedValue": ""
                },{
                    "paramId": "NOTE-TXT",
                    "precisionLength": 254,
                    "storedValue": ""
                },{
                    "paramId": "NOTE-TXT-M",
                    "precisionLength": 1,
                    "storedValue": ""
                }
            ]
        }).controller('page', function($scope, payload) {
            $scope.blobString ="";
            $scope.payLoadblobRequest = payload.blobRequest;
            $scope.title = "Enter Service Request BLOB here";
            $scope.parseBlob = function(){
                console.log($scope.blobString);
                angular.forEach($scope.payLoadblobRequest, function (Obj, key) {
                    if($scope.blobString != ""){
                        Obj.storedValue = $scope.blobString.substr(0,Obj.precisionLength);
                        $scope.blobString = $scope.blobString.substr(Obj.precisionLength,$scope.blobString.length);
                    }
                });
            };
        });
        //AXY450000000000600000000000001000000000000000000000410290300610250140000000000000000000000000000000Y400000000000600000000000001000000000000000000000410290300610250140000000000000000000000000000000Y350000000000600000000000001000000000000000000000410290300610250140000000000000000000000000000000Y300000000000600000000000001000000000000000000000410290300610250140000000000000000000000000000000Y250000000000600000000000001000000000000000000000410290300610250140000000000000000000000000000000Y200000000000600000000000001000000000000000000000410290300610250140000000000000000000000000000000Y150000000000600000000000001000000000000000000000410290300610250140000000000000000000000000000000Y100000000000600000000000001000000000000000000000410290300610250140000000000000000000000000000000Y050000000000600000000000001000000000000000000000410290300610250140000000000000000000000000000000Y000000000000600000000000161000000000000000000000410290300610250140000000000000000000000000000000N050000000000600000000000221000000000000000000000410290300610250140000000000000000000000000000000N1000000000006000000000002410000000000000000000004102903006102501400000000000000000000000000000
   