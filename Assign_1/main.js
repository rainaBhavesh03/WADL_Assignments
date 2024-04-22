$(function () {
  // Navbar
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar, #content').toggleClass('active');
  });

  const data = {
    labels: ['Completed', 'Incomplete', 'Pre-Order'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
      },
    ],
  };

  // Pie Chart
  const config = {
    type: 'pie',
    data: data,
    options: {},
  };


  // Line Chart
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];
  const lineData = {
    labels: labels,
    datasets: [{
      label: 'Enrolees',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [6985, 10984, 13034, 2543, 24540, 35450],
    }]
  };

  const lineConfig = {
    type: 'line',
    data: lineData,
    options: {}
  };

  var pieChart = new Chart(document.getElementById('pie'), config);
  var lineChart = new Chart(document.getElementById('line'), lineConfig);



  // Datatable

  var dataTable = $('#filtertable').DataTable({
    dom: '<"top">ct<"top"p><"clear">',
	pageLength: 10
  });

  $('#filterbox').keyup(function () {
    dataTable.search(this.value).draw();
  });

  $('#pageFilter').change(function () {
    let tablePageLength = parseInt(this.value);

    dataTable.page.len(tablePageLength).draw();
  });

});
