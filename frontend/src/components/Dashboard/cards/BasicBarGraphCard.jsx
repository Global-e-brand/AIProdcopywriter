import { Grid } from "@mui/material";
import "../card-stylings/basic-bar-graph-card.css";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import categoryList from "../../json/category-list.json";
import commaNumber from "comma-number";




export function BasicBarGraphCard(props) {
  let subcategories = props.data.topCategories!==undefined?props.data.topCategories:[];
  let total_count = props.data.total_count!==undefined?props.data.total_count:"-";

  const categoriesRow = () => {
    let topCategories = [];

    subcategories.map((item) => {
      categoryList.map((child_cat) => {
        child_cat.childcategory.map((cat) => {
          if (cat.url == item.category) {
            topCategories.push({ category: cat.name, count: item.count });
          }
        });
      });
    });

    return (
      topCategories.map((cat)=>(
        <> 
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <p className="medium-text">{cat.category}</p>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          {progressBar("determinate", cat.count)}
          <p className="text-center">{((cat.count/total_count)*100).toFixed(2) +" %"}</p>
        </Grid>
        </>
      ))
    );
  };

  const progressBar=(variant, value) =>{
    return <BorderLinearProgress variant={variant} value={normalise(value)} />;
  }
  
  const normalise = (value) => ((value - 0) * 100) / (total_count - 0);

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 32,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));
  
  
  
  return (
    <Grid container className="statistics-card" direction="column">
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={8} sm={6} md={10} lg={10} xl={10}>
          <h2 className="statistics-title_">Top Subcategories</h2>
          <p className="small-text-blue">{commaNumber(total_count) } Visitors</p>
        </Grid>
        {/* <Grid item xs={8} sm={4} md={2} lg={2} xl={2} className="view-all-btn">
          <button className="view-all-btn">View All</button>
        </Grid> */}
      </Grid>

      <Grid container paddingTop={4}>
        {categoriesRow()}
      </Grid>
    </Grid>
  );
}
