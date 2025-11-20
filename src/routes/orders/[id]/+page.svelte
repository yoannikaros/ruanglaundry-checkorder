<script lang="ts">
	import { onMount } from 'svelte';
	import { db } from '$lib/firebase';
	import { doc, getDoc } from 'firebase/firestore';
	import type { Order } from '$lib/types';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import QRCode from 'qrcode';

	let order: Order | null = null;
	let loading = true;
	let error: string | null = null;
	let qrCodeDataUrl: string = '';

	onMount(async () => {
		const orderId = $page.params.id;
		
		if (!orderId) {
			error = 'Order ID tidak ditemukan';
			loading = false;
			return;
		}

		try {
			const orderDoc = doc(db, 'orders', orderId);
			const orderSnapshot = await getDoc(orderDoc);
			
			if (orderSnapshot.exists()) {
				const data = orderSnapshot.data();
				order = {
					...data,
					createdAt: data.createdAt?.toDate() || new Date(),
					updatedAt: data.updatedAt?.toDate() || new Date(),
					deadline: data.deadline?.toDate() || new Date()
				} as Order;

				// Generate QR code for order ID
				qrCodeDataUrl = await QRCode.toDataURL(order.orderId, {
					width: 128,
					margin: 1,
					color: {
						dark: '#14b8a6', // teal-500
						light: '#ffffff'
					}
				});
			} else {
				error = 'Order tidak ditemukan';
			}
		} catch (err) {
			console.error('Error fetching order:', err);
			error = 'Gagal memuat data order';
		} finally {
			loading = false;
		}
	});

	function formatCurrency(amount: number): string {
		return new Intl.NumberFormat('id-ID', {
			style: 'currency',
			currency: 'IDR'
		}).format(amount);
	}

	function formatDateTime(date: Date): string {
		return new Intl.DateTimeFormat('id-ID', {
			day: 'numeric',
			month: 'long',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			timeZone: 'Asia/Jakarta'
		}).format(date);
	}

	function getStatusColor(status: string): string {
		switch (status.toLowerCase()) {
			case 'lunas':
				return 'bg-green-100 text-green-700';
			case 'dalam antrian':
				return 'bg-yellow-100 text-yellow-700';
			case 'proses':
				return 'bg-blue-100 text-blue-700';
			case 'selesai':
				return 'bg-purple-100 text-purple-700';
			default:
				return 'bg-gray-100 text-gray-700';
		}
	}
</script>

{#if loading}
	<div class="min-h-screen bg-gradient-to-br from-white to-slate-50 flex items-center justify-center">
		<div class="text-center">
			<div class="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto mb-4"></div>
			<p class="text-slate-600">Memuat data order...</p>
		</div>
	</div>
{:else if error}
	<div class="min-h-screen bg-gradient-to-br from-white to-slate-50 flex items-center justify-center">
		<div class="text-center max-w-md mx-auto p-6">
			<div class="mb-4">
				<svg class="h-16 w-16 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
			</div>
			<h2 class="text-xl font-semibold text-slate-900 mb-2">Terjadi Kesalahan</h2>
			<p class="text-slate-600 mb-4">{error}</p>
			<button 
				onclick={() => goto('/')}
				class="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
			>
				Kembali ke Beranda
			</button>
		</div>
	</div>
{:else if order}
	<div class="min-h-screen bg-gradient-to-br from-white to-slate-50 p-4 md:p-8">
		<div class="mx-auto max-w-2xl">
			<!-- Header -->
			<div class="mb-6">

				
				<div class="text-center">
					<div class="mb-4 flex justify-center">
						{#if qrCodeDataUrl}
							<img src={qrCodeDataUrl} alt="QR Code for Order {order.orderId}" class="h-32 w-32" />
						{:else}
							<div class="h-32 w-32 bg-gray-200 animate-pulse rounded"></div>
						{/if}
					</div>
					<h1 class="mb-2 text-3xl font-bold tracking-tight text-slate-900">Detail Order</h1>
					<p class="text-sm font-mono text-slate-500">{order.orderId}</p>
				</div>
			</div>

			<!-- Customer Info -->
			<div class="mb-6 rounded-lg bg-white p-6 shadow-sm">
				<h2 class="mb-4 text-2xl font-bold text-slate-900">{order.customerName}</h2>
				<p class="text-base text-slate-700 mb-2">{order.serviceDetail}</p>
				<div class="space-y-1 text-sm text-slate-600">
					<p>📱 {order.customerPhone}</p>
					{#if order.customerAddress}
						<p>📍 {order.customerAddress}</p>
					{/if}
				</div>
			</div>

			<!-- Status Section -->
			<div class="mb-6 rounded-lg bg-white p-6 shadow-sm">
				<div class="mb-4 flex items-center justify-between">
					<h3 class="text-lg font-semibold text-slate-900">STATUS</h3>
					<span class="rounded-full px-4 py-1 text-sm font-medium {getStatusColor(order.status)}">
						{order.status.toUpperCase()}
					</span>
				</div>
				<div class="space-y-3 border-t border-slate-200 pt-4">
					<div class="flex justify-between">
						<span class="text-slate-600">Order Dibuat</span>
						<span class="text-right">
							<div class="font-medium text-slate-900">{formatDateTime(order.createdAt)}</div>
						</span>
					</div>
					<div class="flex justify-between">
						<span class="text-slate-600">Terakhir Diperbarui</span>
						<span class="text-right">
							<div class="font-medium text-slate-900">{formatDateTime(order.updatedAt)}</div>
						</span>
					</div>
					<div class="border-t border-dashed border-slate-200 pt-3">
						<div class="flex justify-between text-slate-600">
							<span>Deadline</span>
							<span class="font-medium text-slate-900">{formatDateTime(order.deadline)}</span>
						</div>
					</div>
				</div>
			</div>

			<!-- Transaction Details -->
			<div class="mb-6 rounded-lg bg-white p-6 shadow-sm">
				<h3 class="mb-4 text-lg font-semibold text-slate-900">Detail Transaksi</h3>
				<div class="space-y-3 text-sm">
					<div class="flex justify-between">
						<span class="text-slate-600">Status Pembayaran</span>
						<span class="font-medium {order.isPaid ? 'text-green-600' : 'text-red-600'}">
							{order.isPaid ? 'LUNAS' : 'BELUM LUNAS'}
						</span>
					</div>
					<div class="flex justify-between">
						<span class="text-slate-600">Metode Pembayaran</span>
						<span class="font-medium text-slate-900">{order.paymentType}</span>
					</div>
					<div class="flex justify-between">
						<span class="text-slate-600">Berat (kg)</span>
						<span class="font-medium text-slate-900">{order.weight}</span>
					</div>
					<div class="flex justify-between">
						<span class="text-slate-600">Quantity</span>
						<span class="font-medium text-slate-900">{order.quantity}</span>
					</div>
					<div class="border-t border-slate-200 pt-3">
						<div class="flex justify-between">
							<span class="text-slate-600">Total Harga</span>
							<span class="font-medium text-slate-900">{formatCurrency(order.price)}</span>
						</div>
					</div>
					{#if order.dpAmount !== null && order.dpAmount > 0}
						<div class="flex justify-between">
							<span class="text-slate-600">DP</span>
							<span class="font-medium text-slate-900">{formatCurrency(order.dpAmount)}</span>
						</div>
					{/if}
				</div>
			</div>

			<!-- Notes Section -->
			{#if order.notes}
				<div class="mb-6 rounded-lg bg-white p-6 shadow-sm">
					<h3 class="mb-4 text-lg font-semibold text-slate-900">Catatan</h3>
					<p class="text-sm text-slate-700">{order.notes}</p>
				</div>
			{/if}

			<!-- Service Info -->
			<div class="mb-8 rounded-lg bg-white p-6 shadow-sm">
				<h3 class="mb-4 text-lg font-semibold text-slate-900">Informasi Layanan</h3>
				<div class="space-y-2 text-sm">
					<div class="flex justify-between">
						<span class="text-slate-600">Tipe Layanan</span>
						<span class="font-medium text-slate-900">{order.serviceType}</span>
					</div>
					<div class="flex justify-between">
						<span class="text-slate-600">Detail Layanan</span>
						<span class="font-medium text-slate-900">{order.serviceDetail}</span>
					</div>
				</div>
			</div>

			<!-- Footer -->
			<div class="text-center text-xs text-slate-500">
				<p>Powered by Ruang Laundry.</p>
			</div>
		</div>
	</div>
{/if}
