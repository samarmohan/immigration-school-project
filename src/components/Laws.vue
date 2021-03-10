<template>
	<table class="table table-striped table-border table-hover">
		<thead>
			<tr>
				<th>Name</th>
				<th>Year</th>
				<th>Details</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>The Immigration Reform and Control Act (IRCA)</td>
				<td>1986</td>
				<td>
					<router-link class="btn btn-info btn-sm" to="/irca"
						>Details</router-link
					>
				</td>
			</tr>
			<tr>
				<td>The Immigration Act (IA)</td>
				<td>1990</td>
				<td>
					<router-link class="btn btn-info btn-sm" to="/ia"
						>Details</router-link
					>
				</td>
			</tr>
			<tr>
				<td>
					The Illegal Immigration Reform and Immigrant Responsibility Act
					(IIRIAR)
				</td>
				<td>1996</td>
				<td>
					<router-link class="btn btn-info btn-sm" to="/iiriar"
						>Details</router-link
					>
				</td>
			</tr>
			<tr>
				<td>
					Legal Immigration and Family Equity (LIFE)
				</td>
				<td>2000</td>
				<td>
					<router-link class="btn btn-info btn-sm" to="/life"
						>Details</router-link
					>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
export default {
	name: "Laws",
};
</script>

<style></style>
