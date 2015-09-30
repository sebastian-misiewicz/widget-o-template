widgeto.controller('TopMenuController', function ($scope, WidgetManager) {

    $scope.id;
    $scope.element;
    
    $scope.set = function (id) {
        $scope.id = id;
        $scope.element = WidgetManager.getScope(id);
        return true;
    };
    
});

widgeto.run(function (WidgetManager) {
    WidgetManager.add(
            'top-menu', 
            'widgets/top-menu.html',
            {
                "widget": "top-menu",
                "label": {
                    "text": "Menu Item"
                },
                "link": {
                    "type": "external",
                    "href": "http://www.wp.pl/"
                }
            });
});