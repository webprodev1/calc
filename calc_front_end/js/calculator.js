const api_url_boom = '';

const apiService = {
  calculatorGetUsPorts:  `${api_url_boom}/calculator-get-us-ports`,
  calculatorGetAucLocations: `${api_url_boom}/calculator-get-auclocations`,
  calculatorGetIntCities: `${api_url_boom}/calculator-get-intlcities`,
  calculatorRecalculate: `${api_url_boom}/calculator-recalculate`
}

const apiUrls = {
  sideCalcNextBtnUrl: `${api_url_boom}/calculator?auc_id=`,
  calcReserve: `${api_url_boom}/calc-reserve?auc_location_id=`,
}

function loadUsPorts(mobile=false)
{

  if (mobile==true)
  {
    var aucLocationId=$('#AucLocationsSelectSm').val();
  }
  else
  {
    var aucLocationId=$('#AucLocationsSelectLg').val();
  }
  // apiService.calculatorGetUsPorts
  // https://vsbrothers.com/calculator-get-us-ports
  $.ajax({
    type:"GET",
    url : apiService.calculatorGetUsPorts,
    data : {
      "location_id":aucLocationId
    },
    success : function(response)
    {
      data = response;

      $('#UsPortsSelectSm').empty();
      $('#UsPortsSelectLg').empty();

      var toAppend = '<option value="-1">Select Exit Port</option>';
      $.each(data['us_ports'],function(i,o)
      {
        toAppend += '<option value="'+o.id+'">'+o.name+'</option>';
      });
      $('#UsPortsSelectSm').append(toAppend);
      $('#UsPortsSelectLg').append(toAppend);

      return response;
    },
    error: function() {}
  });
}


$(document).ready(function(){

  // loadAucLocations();
  // loadIntlCities();
  clearCalculatorGround();
  clearCalculatorOcean();
  clearCalculatorGroundSm();
  clearCalculatorOceanSm();
});

$('[data-behavior~="add-insurance-value"]').on('click', function(){
    $('[data-role~="calc-insurance-value"]').css('display','flex');
    $('[data-role~="cancel-insurance-block"]').show();
});

$('[data-behavior~="cancel-insurance-btn"]').on('click', function(e){
    e.preventDefault();
    $('[data-role~="calc-insurance-value"]').css('display','none');
    $('[data-role~="cancel-insurance-block"]').hide();
    $('[data-role~="calc-insurance-value"]').find('input').val('');
});


$('[data-behavior~="edit-insurance-block"]').on('click', function(e){
    e.preventDefault();
    $('[data-behavior="edit-insurance-block"]').closest('div').hide();
    $('[data-role~="calc-insurance-value"]').css('display','flex');
    $('[data-role~="cancel-insurance-block"]').show();
    $('[data-role~="insurance-car-value-block"]').hide();
});

$('[data-behavior~="add-insurance-btn"]').on('click', function(){
    $('[data-role~="calc-insurance-value"]').css('display','none');
    $('[data-role~="cancel-insurance-block"]').hide();
    $('[data-role="add-insurance-block"]').hide();
    $('[data-role~="insurance-car-value-block"]').show();
    $('[data-behavior="edit-insurance-block"]').closest('div').show();
    var insurance = $('[data-role~="calc-insurance-value"]').find('input').val();
    $('#insurance_car_value').html('$ '+parseFloat(insurance).toFixed(2));
    recalculate();
});

$('#AuctionSelectLg').on('change',function(){
  loadAucLocations();
  clearCalculatorGround();
});

$('#AucLocationsSelectLg').on('change',function(){
  loadUsPorts(false);
  clearCalculatorGround();
  clearCalculatorOcean();
});
$('#UsPortsSelectLg').on('change',function(){
  recalculate();
});

$('#IntlPortsSelectLg').on('change',function(){
  clearCalculatorOcean();
  loadIntlCities(false);
});

$('#IntlPortsCitiesSelectLg').on('change',function(){

  recalculate();
});

$('#calcCars-tab').on('click',function(){
  recalculate();
});



$('#AucUSASelect').on('change',function(){
  loadAucLocations(true);
});


// apiUrls.sideCalcNextBtnUrl
$('#sideCalcNextBtn').on('click',function(){
  var aucId=$('#AucUSASelect').val();
  var auclocId=$('#AucLocUSASelect').val();
  var intlDestId=$('#intlDestSelect').val();
  var cargo_type_id='';

  //console.log(aucId,auclocId,intlDestId);
  var cargo_type=$('span.e-cats__car.active').prop('id');
  if (cargo_type)
  {
    cargo_type_id=cargo_type.replace('car_sp','');
  }

  //console.log(cargo_type_id);
  var url= apiUrls.sideCalcNextBtnUrl+aucId+'&aucloc_id='+auclocId+'&intldest_id='+intlDestId+'&cargo_type='+cargo_type_id;
  $(location).attr('href', url);
});


// apiService.calculatorGetAucLocations
function loadAucLocations(side=false)
{

  var aucId;
  if(side)
  {
    aucId=$('#AucUSASelect').val();
  }
  else
  {
    aucId=$('#AuctionSelectLg').val();
  }


  if(!aucId) return;
  var data = "";

  $.ajax({
    type:"GET",
    url : apiService.calculatorGetAucLocations,
    data : "auc_id="+aucId,
    success : function(response)
    {
      data = response;
      var toAppend = '<option value="-1" selected>Select Location</option>';
      $.each(data,function(i,o){
        toAppend += '<option value="'+o.id+'">'+o.name+'</option>';
      });
      //console.log(side);
      if (side)
      {
        $('#AucLocUSASelect').empty();
        $('#AucLocUSASelect').append(toAppend);
      }
      else
      {
        $('#AucLocationsSelectLg').empty();
        $('#AucLocationsSelectLg').append(toAppend);
      }
      return response;
    },
    error: function() {}
  });
}

function loadIntlCities(mobile=false)
{
  if(mobile==true)
  {
    var portId=$('#IntlPortsSelectSm').val();
  }
  else
  {
    var portId=$('#IntlPortsSelectLg').val();
  }
  if (!portId) return;
  var data = "";
  // apiService.calculatorGetIntCities
  $.ajax({
    type:"GET",
    url : apiService.calculatorGetIntCities,
    data : "port_id="+portId,
    success : function(response) {
      $('#IntlPortsCitiesSelectLg').empty();
      $('#IntlPortsCitiesSelectSm').empty();
      data = response;
      var toAppend = '<option value="-1">Select Port/City</option>';
      $.each(data,function(i,o){
        toAppend += '<option value="'+o.id+'">'+o.name+'</option>';
      });
      $('#IntlPortsCitiesSelectLg').append(toAppend);
      $('#IntlPortsCitiesSelectSm').append(toAppend);
      return response;
    },
    error: function(){}
  });
}


function recalculate(param=0)
{
  var aucLocationId=$('#AucLocationsSelectLg').val();
  var portUSId=$('#UsPortsSelectLg').val();
  var intlCityId=$('#IntlPortsCitiesSelectLg').val();
  //var cargoType = $('#calcCars-tab').find('a.active').attr('id');
  var cargoType = $('#calcCars-tab').find('a.active').attr('data-ctype');
  var aucId=$('#AuctionSelectLg').val();
  var intlPortId=$('#IntlPortsSelectLg').val();
  var insurance = $('[data-role~="calc-insurance-value"]').find('input').val();

  car4=0;
  calc_discount_user = '';

  if($('[data-role~="calc-discount-user"]').length>0){
    calc_discount_user = $('[data-role~="calc-discount-user"]').val() ? $('[data-role~="calc-discount-user"]').val() : '';
  }
  

  if (cargoType=='car1' || cargoType=='car2' || cargoType=='mediumtruck')
  {
    if ($('#carsPerCont01-02-tab').hasClass('active'))
    {
      car4=1;
    }


    $('.car_details_none').addClass('d-none');
    $('.car_details_load').removeClass('d-none');
    if (param>0)
    {
      if (param=='4')
      {
        car4=1;
      }
      else
      {
        car4=0;
      }
    }
  }
  else
  {
    $('.car_details_none').removeClass('d-none');
    $('.car_details_load').addClass('d-none');
  }


  var zipAuc=0;
  var zipExit=0;
  if ($('#zipAuc').is(":visible"))
    zipAuc = $('#zipAuc').val();
  if ($('#zipExit').is(":visible"))
    zipExit = $('#zipExit').val();

  //console.log(aucLocationId, portUSId,intlCityId,cargoType);
  //return;
  if (!cargoType ) return;
  var data = "";

  $('#price_ground').text('loading...');
  $('#price_ocean').text('loading...');
  $('#price_vsfee').text('loading...');
  $('#price_thcfee').text('loading...');
  if($('#discount_ground').length>0) $('#discount_ground').text('loading...');
  $('#price_total').text('loading...');
  $('#price_insurance').text('loading...');
  // apiService.calculatorRecalculate
  $.ajax({
    type:"GET",
    url : apiService.calculatorRecalculate,
    data : {
      'auc_location_id':aucLocationId,
      'us_port_id':portUSId,
      'intl_city_id':intlCityId,
      //'intl_port_id':intlPortId,
      'cargo_type':cargoType,
      'zip_auc':zipAuc,
      'zip_exit':zipExit,
      'car4':car4,
      'calc_discount_user':calc_discount_user,
      'insurance': insurance
    },
    success : function(response) {
      data = response;
      if (data['price_ground']==0)
      {
        $('#price_ground').text('-');
      }
      else
      {
        $('#price_ground').text('$ '+parseFloat(data['price_ground']).toFixed(2));
      }
      if (data['price_ocean']==0)
      {
        $('#price_ocean').text('-');
      }
      else
      {
        $('#price_ocean').text('$ '+parseFloat(data['price_ocean']).toFixed(2));
      }

      $('#price_vsfee').text('$ '+parseFloat(data['price_vsfee']).toFixed(2));
      $('#price_thcfee').text('$ '+parseFloat(data['price_thcfee']).toFixed(2));
      if($('#discount_ground').length>0) $('#discount_ground').text('$ '+parseFloat(data['discount_ground']).toFixed(2));
      if (data['price_total']==0 || data['price_ocean']==0 || data['price_ground']==0)
      {
        $('#price_total').text('Total: please call');
      }
      else
      {
        $('#price_total').text(' $ '+parseFloat(data['price_total'] + 100).toFixed(2));
      }

      if (data['price_insurance']==0)
      {
        $('#price_insurance').text('-');
      }
      else
      {
        $('#price_insurance').text('$ '+parseFloat(data['price_insurance']).toFixed(2));
      }

      var url= apiUrls.calcReserve + aucLocationId +
        '&auc_id='+aucId+
        '&intl_port_id='+intlPortId+
        '&us_port_id='+portUSId+
        '&intl_city_id='+intlCityId+
        '&cargo_type='+cargoType+
        '&zip_auc='+zipAuc+
        '&zip_exit='+zipExit+
        '&price_ground='+data['price_ground']+
        '&price_ocean='+data['price_ocean']+
        '&price_vsfee='+data['price_vsfee']+
        '&price_thcfee='+data['price_thcfee'];
      //console.log(url);
      //$('#price_total').attr('href',url);
      $('#btn_reserveq').attr('href',url);



      return response;
    },
    error: function() {
      console.log('error');
    }
  });
}

function clearCalculatorGround()
{
  $('#price_ground').text('-');
  if($('#discount_ground').length>0) $('#discount_ground').text('-');
//  $('#price_ocean').text('-');
  $('#price_vsfee').text('-');
  $('#price_thcfee').text('-');
  $('#price_total').text('-');
}

function clearCalculatorOcean()
{
  //$('#price_ground').text('-');
  $('#price_ocean').text('-');
  $('#price_vsfee').text('-');
  $('#price_thcfee').text('-');
  $('#price_total').text('-');
}

function clearCalculatorGroundSm()
{
  $('#price_ground_m').text('-');
//  $('#price_ocean_m').text('-');
  $('#price_vsfee_m').text('-');
  $('#price_thcfee_m').text('-');
  $('#price_total_m').text('-');
}

function clearCalculatorOceanSm()
{
  //$('#price_ground').text('-');
  $('#price_ocean_m').text('-');
  $('#price_vsfee_m').text('-');
  $('#price_thcfee_m').text('-');
  $('#price_total_m').text('-');
}

function loadAucLocationsSm(){

  var aucId = $('#AuctionSelectSm').val();

  if(!aucId) return;
  var data = "";
  // apiService.calculatorGetAucLocations
  // https://vsbrothers.com/calculator-get-auclocations
  $.ajax({
    type:"GET",
    url : apiService.calculatorGetAucLocations,
    data : "auc_id="+aucId,
    success : function(response)
    {
      data = response;
      var toAppend = '<option value="-1" selected>Select Location</option>';
      $.each(data,function(i,o){
        toAppend += '<option value="'+o.id+'">'+o.name+'</option>';
      });

        $('#AucLocationsSelectSm').empty();
        $('#AucLocationsSelectSm').append(toAppend);
      return response;
    },
    error: function() {}
  });
}

function loadIntlPostCities_m()
{
  var portId=$('#calcSelectIntlPort_m').val();
  if (!portId) {
    return;
  }
  // apiService.calculatorGetIntCities
  // https://vsbrothers.com/calculator-get-intlcities
  var data = "";
  $.ajax({
    type:"GET",
    url : apiService.calculatorGetIntCities,
    data : "port_id="+portId,
    success : function(response) {
      $('#calcSelectIntlCities_m').empty();
      data = response;
      var toAppend = '';
      $.each(data,function(i,o){
        toAppend += '<option value="'+o.id+'">'+o.name+'</option>';
      });
      $('#calcSelectIntlCities_m').append(toAppend);
      return response;
    },
    error: function(){}
  });
  recalculate_m();
}

function recalculate_m()
{
  var aucLocationId=$('#AucLocationsSelectSm').val();
  var portUSId=$('#UsPortsSelectSm').val();
  var intlCityId=$('#IntlPortsCitiesSelectSm').val();

  //console.log(1);

  //console.log(2);
  var cargoType = $('#calcSelectCargoType_m').val();

  var aucId=$('#AuctionSelectSm').val();
  var intlPortId=$('#IntlPortsSelectSm').val();

  var zipAuc=0;
  var zipExit=0;
  if ($('#zipAuc').is(":visible"))
    zipAuc = $('#zipAuc').val();
  if ($('#zipExit').is(":visible"))
    zipExit = $('#zipExit').val();

  //console.log(aucLocationId, portUSId,intlCityId,cargoType);
  //return;
  if (!cargoType )
  {
    return;
  }
  var data = "";

  $('#price_ground_m').text('loading...');
  $('#price_ocean_m').text('loading...');
  $('#price_vsfee_m').text('loading...');
  $('#price_thcfee_m').text('loading...');
  $('#price_total_m').text('loading...');
  // apiService.calculatorRecalculate
  // https://vsbrothers.com/calculator-recalculate
  $.ajax({
    type:"GET",
    url : apiService.calculatorRecalculate,
    data : {
      'auc_location_id':aucLocationId,
      'us_port_id':portUSId,
      'intl_city_id':intlCityId,
      'cargo_type':cargoType,
      'zip_auc':zipAuc,
      'zip_exit':zipExit,
    },
    success : function(response) {
      data = response;
      //console.log(data);
      if (data['price_ground']==0)
      {
        $('#price_ground_m').text('-');
      }
      else
      {
        $('#price_ground_m').text('$ '+parseFloat(data['price_ground']).toFixed(2));
      }
      if (data['price_ocean']==0)
      {
        $('#price_ocean_m').text('-');
      }
      else
      {
        $('#price_ocean_m').text('$ '+parseFloat(data['price_ocean']).toFixed(2));
      }

      $('#price_vsfee_m').text('$ '+parseFloat(data['price_vsfee']).toFixed(2));
      $('#price_thcfee_m').text('$ '+parseFloat(data['price_thcfee']).toFixed(2));

      if (data['price_total']==0 || data['price_ocean']==0 || data['price_ground']==0)
      {
        $('#price_total_m').text('please call');
      }
      else
      {
        $('#price_total_m').text('$ '+parseFloat(data['price_total']).toFixed(2));
      }


      var url= apiUrls.calcReserve +aucLocationId+
        '&auc_id='+aucId+
        '&intl_port_id='+intlPortId+
        '&us_port_id='+portUSId+
        '&intl_city_id='+intlCityId+
        '&cargo_type='+cargoType+
        '&zip_auc='+zipAuc+
        '&zip_exit='+zipExit+
        '&price_ground='+data['price_ground']+
        '&price_ocean='+data['price_ocean']+
        '&price_vsfee='+data['price_vsfee']+
        '&price_thcfee='+data['price_thcfee'];
      //console.log(url);
      //$('#price_total_m').attr('href',url);
      $('#price_total_m_url').attr('href',url);

      return response;
    },
    error: function() {
      console.log('error');
    }
  });

}


$('#AuctionSelectSm').on('change',function(){
  loadAucLocationsSm();
  clearCalculatorGroundSm();
});

$('#AucLocationsSelectSm').on('change',function(){
  loadUsPorts(true);
  clearCalculatorGroundSm();
  clearCalculatorOceanSm();
});

$('#UsPortsSelectSm').on('change',function(){
  clearCalculatorOceanSm();
  loadIntlCities(true);
  recalculate_m();
});

$('#IntlPortsSelectSm').on('change',function(){
  clearCalculatorOceanSm();
  loadIntlCities(true);
});
//

$('#IntlPortsCitiesSelectSm').on('change',function(){
  recalculate_m();
});

$('#calcSelectCargoType_m').on('change',function ()
{
  recalculate_m();
})

// single sale

$('#selectAuc ,#selectAuc_sm').on('change',function(){
  loadAucLocations_car();
  clearCalculatorGround_car();
});


$('#selectAucLoc, #selectAucLoc_sm').on('change',function(){
  loadUsPorts_car();
  clearCalculatorGround_car();
  clearCalculatorOcean_car();
});

$('#selectUSPort, #selectUSPort_sm').on('change',function(){
  clearCalculatorOcean_car();
  loadIntlPostCities_car(true);
  recalculate_car();
});

$('#selectIntlPort, #selectIntlPort_sm').on('change',function(){
  loadIntlPostCities_car();
  clearCalculatorOcean_car();
});


$('#selectIntlCity, #selectCargoType').on('change',function () {
  recalculate_car();
})
$('#selectIntlCity_sm, #selectCargoType_sm').on('change',function () {
  recalculate_car();
})


function loadIntlPostCities_car()
{
  if($('#selectAuc').is(':visible'))
  {
    var portId=$('#selectIntlPort').val();
  }
  else
  {
    var portId=$('#selectIntlPort_sm').val();
  }
  if (!portId)
  {
    return;
  }
  // apiService.calculatorGetIntCities
  // https://vsbrothers.com/calculator-get-intlcities
  var data = "";
  $.ajax({
    type:"GET",
    url : apiService.calculatorGetIntCities,
    data : "port_id="+portId,
    success : function(response)
    {
      $('#selectIntlCity').empty();
      $('#selectIntlCity_sm').empty();
      data = response;
      var toAppend = '<option value="-1" selected>Select Port/City</option>';
      $.each(data,function(i,o){
        toAppend += '<option value="'+o.id+'">'+o.name+'</option>';
      });
      $('#selectIntlCity').append(toAppend);
      $('#selectIntlCity_sm').append(toAppend);
      return response;
    },
    error: function(){}
  });
}

function loadAucLocations_car()
{
  var aucId;
  if($('#selectAuc').is(':visible'))
  {
    aucId=$('#selectAuc').val();
  }
  else
  {
    aucId=$('#selectAuc_sm').val();
  }

  if(!aucId) return;
  var data = "";
  // apiService.calculatorGetAucLocations
  // https://vsbrothers.com/calculator-get-auclocations
  $.ajax({
    type:"GET",
    url : apiService.calculatorGetAucLocations,
    data : "auc_id="+aucId,
    success : function(response)
    {
      data = response;
      var toAppend = '<option value="-1" selected>Select Location</option>';
      $.each(data,function(i,o){
        toAppend += '<option value="'+o.id+'">'+o.name+'</option>';
      });
        $('#selectAucLoc').empty();
        $('#selectAucLoc').append(toAppend);
      $('#selectAucLoc_sm').empty();
      $('#selectAucLoc_sm').append(toAppend);
      return response;
    },
    error: function() {}
  });
}


function loadUsPorts_car()
{

  if($('#selectAuc').is(':visible'))
  {
    var aucLocationId=$('#selectAucLoc').val();
  }
  else
  {
    var aucLocationId=$('#selectAucLoc_sm').val();
  }
  // apiService.calculatorGetUsPorts
  // https://vsbrothers.com/calculator-get-us-ports
  $.ajax({
    type:"GET",
    url : apiService.calculatorGetUsPorts,
    data : {
      "location_id":aucLocationId
    },
    success : function(response)
    {
      data = response;

      $('#selectUSPort_sm').empty();
      $('#selectUSPort').empty();

      var toAppend = '<option value="-1">Select Exit Port</option>';
      $.each(data['us_ports'],function(i,o)
      {
        toAppend += '<option value="'+o.id+'">'+o.name+'</option>';
      });
      $('#selectUSPort_sm').append(toAppend);
      $('#selectUSPort').append(toAppend);

      return response;
    },
    error: function() {}
  });
}

function clearCalculatorGround_car()
{
  $('#price_ground').text('-');
//  $('#price_ocean').text('-');
  $('#vs_fee').text('-');
  $('#thc_fee').text('-');
  $('#price_total').text('-');
}

function clearCalculatorOcean_car()
{
  //$('#price_ground').text('-');
  $('#price_ocean').text('-');
  $('#vs_fee').text('-');
  $('#thc_fee').text('-');
  $('#price_total').text('-');
}

function recalculate_car()
{
  if($('#selectAuc').is(':visible'))
  {
    var aucLocationId=$('#selectAucLoc').val();
    var portUSId=$('#selectUSPort').val();
    var intlCityId=$('#selectIntlCity').val();
    var cargoType = $('#selectCargoType').val();
    var aucId=$('#selectAuc').val();
    var intlPortId=$('#selectIntlPort').val();
  }
  else
  {
    var aucLocationId=$('#selectAucLoc_sm').val();
    var portUSId=$('#selectUSPort_sm').val();
    var intlCityId=$('#selectIntlCity_sm').val();
    var cargoType = $('#selectCargoType_sm').val();
    var aucId=$('#selectAuc_sm').val();
    var intlPortId=$('#selectIntlPort_sm').val();
  }

  if (!intlCityId)
  {
    //return;
  }

  if (!cargoType )
  {
    return;
  }
  var data = "";

  $('#price_ground').text('loading...');
  $('#price_ocean').text('loading...');
  $('#price_total').text('loading...');
  // apiService.calculatorRecalculate
  // https://vsbrothers.com/calculator-recalculate
  $.ajax({
    type:"GET",
    url : apiService.calculatorRecalculate,
    data : {
      'auc_location_id':aucLocationId,
      'us_port_id':portUSId,
      'intl_city_id':intlCityId,
      'cargo_type':cargoType,
    },
    success : function(response) {
      data = response;
      //console.log(data);

      if (data['price_ground']==0)
      {
        $('#price_ground').text('-');
      }
      else
      {
        $('#price_ground').text('$ '+parseFloat(data['price_ground']).toFixed(2));
      }
      if (data['price_ocean']==0)
      {
        $('#price_ocean').text('-');
      }
      else
      {
        $('#price_ocean').text('$ '+parseFloat(data['price_ocean']).toFixed(2));
      }

      $('#vs_fee').text('$ '+parseFloat(data['price_vsfee']).toFixed(2));
      $('#thc_fee').text('$ '+parseFloat(data['price_thcfee']).toFixed(2));

      var car_price=$('#car_price').text();
      car_price=car_price.replace('$','');
      car_price=car_price.replace(',','');

      if (data['price_total']==0 || data['price_ocean']==0 || data['price_ground']==0)
      {
        $('#price_total').text('please call');
      }
      else
      {
        var total_price=parseFloat(car_price)+data['price_total'];

        $('#price_total').text('Total: $ '+parseFloat(total_price).toFixed(2));
      }

      var url= apiUrls.calcReserve +aucLocationId+
        '&auc_id='+aucId+
        '&intl_port_id='+intlPortId+
        '&us_port_id='+portUSId+
        '&intl_city_id='+intlCityId+
        '&cargo_type='+cargoType+
        '&price_ground='+data['price_ground']+
        '&price_ocean='+data['price_ocean']+
        '&price_vsfee='+data['price_vsfee']+
        '&price_thcfee='+data['price_thcfee'];
      //console.log(url);
      $('#price_total_a').attr('href',url);

      return response;
    },
    error: function() {
      console.log('error');
    }
  });

}
